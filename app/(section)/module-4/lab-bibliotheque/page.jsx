import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "La bibliothèque avec interface",
    description: "Exercice avancé de gestion de catalogue de livres avec interface complète, recherche, filtres et opérations CRUD complexes.",
    keywords: ["laboratoire", "bibliothèque", "catalogue", "livres", "interface", "recherche", "filtres", "crud"],
    group: "lab"
}

const htmlStructure = 
`<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestionnaire de Bibliothèque</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>📚 Gestionnaire de Bibliothèque</h1>
            <button id="add-book-btn" class="btn-primary">Ajouter un livre</button>
        </header>

        <!-- Barre de recherche et filtres -->
        <div class="controls">
            <div class="search-box">
                <input type="text" id="search-input" placeholder="Rechercher par titre, auteur ou ISBN...">
                <button id="search-btn">🔍</button>
            </div>
            
            <div class="filters">
                <select id="genre-filter">
                    <option value="">Tous les genres</option>
                    <option value="fiction">Fiction</option>
                    <option value="non-fiction">Non-fiction</option>
                    <option value="science">Science</option>
                    <option value="histoire">Histoire</option>
                    <option value="biographie">Biographie</option>
                </select>
                
                <select id="status-filter">
                    <option value="">Tous les statuts</option>
                    <option value="available">Disponible</option>
                    <option value="borrowed">Emprunté</option>
                    <option value="reserved">Réservé</option>
                </select>
                
                <select id="sort-by">
                    <option value="title">Trier par titre</option>
                    <option value="author">Trier par auteur</option>
                    <option value="year">Trier par année</option>
                    <option value="rating">Trier par note</option>
                </select>
            </div>
        </div>

        <!-- Statistiques -->
        <div class="stats">
            <div class="stat-card">
                <span class="stat-number" id="total-books">0</span>
                <span class="stat-label">Livres total</span>
            </div>
            <div class="stat-card">
                <span class="stat-number" id="available-books">0</span>
                <span class="stat-label">Disponibles</span>
            </div>
            <div class="stat-card">
                <span class="stat-number" id="borrowed-books">0</span>
                <span class="stat-label">Empruntés</span>
            </div>
        </div>

        <!-- Liste des livres -->
        <div id="books-grid" class="books-grid">
            <!-- Les livres seront ajoutés ici dynamiquement -->
        </div>

        <!-- Loading spinner -->
        <div id="loading" class="loading hidden">
            <div class="spinner"></div>
            <p>Chargement...</p>
        </div>
    </div>

    <!-- Modal pour ajouter/modifier un livre -->
    <div id="book-modal" class="modal hidden">
        <div class="modal-content">
            <div class="modal-header">
                <h2 id="modal-title">Ajouter un livre</h2>
                <button id="close-modal" class="close-btn">&times;</button>
            </div>
            <form id="book-form" class="book-form">
                <div class="form-group">
                    <label for="book-title">Titre *</label>
                    <input type="text" id="book-title" required>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="book-author">Auteur *</label>
                        <input type="text" id="book-author" required>
                    </div>
                    <div class="form-group">
                        <label for="book-isbn">ISBN</label>
                        <input type="text" id="book-isbn">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="book-genre">Genre</label>
                        <select id="book-genre">
                            <option value="fiction">Fiction</option>
                            <option value="non-fiction">Non-fiction</option>
                            <option value="science">Science</option>
                            <option value="histoire">Histoire</option>
                            <option value="biographie">Biographie</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="book-year">Année de publication</label>
                        <input type="number" id="book-year" min="1000" max="2024">
                    </div>
                </div>
                <div class="form-group">
                    <label for="book-description">Description</label>
                    <textarea id="book-description" rows="3"></textarea>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="book-pages">Nombre de pages</label>
                        <input type="number" id="book-pages" min="1">
                    </div>
                    <div class="form-group">
                        <label for="book-rating">Note (1-5)</label>
                        <input type="number" id="book-rating" min="1" max="5" step="0.1">
                    </div>
                </div>
                <div class="form-actions">
                    <button type="button" id="cancel-btn" class="btn-secondary">Annuler</button>
                    <button type="submit" class="btn-primary">Enregistrer</button>
                </div>
            </form>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>`;

const jsClass = 
`class LibraryManager {
    constructor() {
        this.books = [];
        this.currentEditId = null;
        this.init();
    }

    async init() {
        this.bindEvents();
        await this.loadBooks();
        this.render();
    }

    bindEvents() {
        // Recherche
        document.getElementById('search-input').addEventListener('input', 
            this.debounce(() => this.handleSearch(), 300));
        
        // Filtres
        document.getElementById('genre-filter').addEventListener('change', () => this.render());
        document.getElementById('status-filter').addEventListener('change', () => this.render());
        document.getElementById('sort-by').addEventListener('change', () => this.render());

        // Modal
        document.getElementById('add-book-btn').addEventListener('click', () => this.openModal());
        document.getElementById('close-modal').addEventListener('click', () => this.closeModal());
        document.getElementById('cancel-btn').addEventListener('click', () => this.closeModal());
        document.getElementById('book-form').addEventListener('submit', (e) => this.handleSubmit(e));
    }

    async loadBooks() {
        this.showLoading(true);
        try {
            const response = await fetch('/api/books');
            if (response.ok) {
                this.books = await response.json();
            }
        } catch (error) {
            console.error('Erreur lors du chargement:', error);
            this.showError('Impossible de charger les livres');
        } finally {
            this.showLoading(false);
        }
    }

    async saveBook(bookData) {
        try {
            const url = this.currentEditId ? 
                \`/api/books/\${this.currentEditId}\` : '/api/books';
            const method = this.currentEditId ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookData)
            });

            if (response.ok) {
                const book = await response.json();
                
                if (this.currentEditId) {
                    const index = this.books.findIndex(b => b.id === this.currentEditId);
                    this.books[index] = book;
                } else {
                    this.books.push(book);
                }

                this.closeModal();
                this.render();
                this.showSuccess('Livre enregistré avec succès');
            }
        } catch (error) {
            console.error('Erreur lors de la sauvegarde:', error);
            this.showError('Erreur lors de la sauvegarde');
        }
    }

    async deleteBook(id) {
        if (!confirm('Êtes-vous sûr de vouloir supprimer ce livre ?')) return;

        try {
            const response = await fetch(\`/api/books/\${id}\`, { method: 'DELETE' });
            
            if (response.ok) {
                this.books = this.books.filter(book => book.id !== id);
                this.render();
                this.showSuccess('Livre supprimé avec succès');
            }
        } catch (error) {
            console.error('Erreur lors de la suppression:', error);
            this.showError('Erreur lors de la suppression');
        }
    }

    async updateBookStatus(id, status) {
        try {
            const response = await fetch(\`/api/books/\${id}/status\`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status })
            });

            if (response.ok) {
                const book = this.books.find(b => b.id === id);
                if (book) {
                    book.status = status;
                    this.render();
                }
            }
        } catch (error) {
            console.error('Erreur lors de la mise à jour du statut:', error);
        }
    }

    getFilteredAndSortedBooks() {
        let filtered = [...this.books];

        // Recherche
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        if (searchTerm) {
            filtered = filtered.filter(book => 
                book.title.toLowerCase().includes(searchTerm) ||
                book.author.toLowerCase().includes(searchTerm) ||
                (book.isbn && book.isbn.includes(searchTerm))
            );
        }

        // Filtres
        const genreFilter = document.getElementById('genre-filter').value;
        const statusFilter = document.getElementById('status-filter').value;

        if (genreFilter) {
            filtered = filtered.filter(book => book.genre === genreFilter);
        }

        if (statusFilter) {
            filtered = filtered.filter(book => book.status === statusFilter);
        }

        // Tri
        const sortBy = document.getElementById('sort-by').value;
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'author':
                    return a.author.localeCompare(b.author);
                case 'year':
                    return (b.year || 0) - (a.year || 0);
                case 'rating':
                    return (b.rating || 0) - (a.rating || 0);
                default:
                    return a.title.localeCompare(b.title);
            }
        });

        return filtered;
    }

    render() {
        const books = this.getFilteredAndSortedBooks();
        const booksGrid = document.getElementById('books-grid');

        if (books.length === 0) {
            booksGrid.innerHTML = '<div class="no-books">Aucun livre trouvé</div>';
        } else {
            booksGrid.innerHTML = books.map(book => this.createBookCard(book)).join('');
        }

        this.updateStats();
    }

    createBookCard(book) {
        const statusColor = {
            'available': '#28a745',
            'borrowed': '#ffc107', 
            'reserved': '#17a2b8'
        };

        return \`
            <div class="book-card" data-id="\${book.id}">
                <div class="book-header">
                    <h3 class="book-title">\${book.title}</h3>
                    <div class="book-status" style="background-color: \${statusColor[book.status] || '#6c757d'}">
                        \${this.getStatusLabel(book.status)}
                    </div>
                </div>
                <div class="book-info">
                    <p class="book-author">Par \${book.author}</p>
                    \${book.year ? \`<p class="book-year">Publié en \${book.year}</p>\` : ''}
                    \${book.rating ? \`<div class="book-rating">\${this.renderStars(book.rating)}</div>\` : ''}
                    \${book.description ? \`<p class="book-description">\${book.description}</p>\` : ''}
                </div>
                <div class="book-actions">
                    <select onchange="libraryManager.updateBookStatus(\${book.id}, this.value)">
                        <option value="available" \${book.status === 'available' ? 'selected' : ''}>Disponible</option>
                        <option value="borrowed" \${book.status === 'borrowed' ? 'selected' : ''}>Emprunté</option>
                        <option value="reserved" \${book.status === 'reserved' ? 'selected' : ''}>Réservé</option>
                    </select>
                    <button onclick="libraryManager.editBook(\${book.id})" class="btn-edit">Modifier</button>
                    <button onclick="libraryManager.deleteBook(\${book.id})" class="btn-delete">Supprimer</button>
                </div>
            </div>
        \`;
    }

    // Méthodes utilitaires
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    showLoading(show) {
        document.getElementById('loading').classList.toggle('hidden', !show);
    }

    showError(message) {
        // Implémenter une notification d'erreur
        alert('Erreur: ' + message);
    }

    showSuccess(message) {
        // Implémenter une notification de succès
        console.log('Succès: ' + message);
    }
}

// Initialiser l'application
const libraryManager = new LibraryManager();`;

export default function Page() {
    return <>
        <section>
            <h2>Laboratoire : La bibliothèque avec interface</h2>
            <p>
                Ce laboratoire avancé vous demande de créer un système complet de gestion de bibliothèque avec une interface 
                riche et des fonctionnalités complexes. Vous devrez gérer un catalogue de livres avec recherche, filtres, 
                statistiques et opérations CRUD complètes.
            </p>
        </section>

        <section>
            <h2>Objectifs avancés</h2>
            <ul>
                <li>Créer une interface utilisateur complexe et intuitive</li>
                <li>Implémenter un système de recherche en temps réel</li>
                <li>Gérer des filtres multiples et le tri dynamique</li>
                <li>Créer un formulaire modal réutilisable</li>
                <li>Implémenter des statistiques en temps réel</li>
                <li>Gérer les états de chargement et les erreurs</li>
                <li>Optimiser les performances avec le debouncing</li>
            </ul>
        </section>

        <section>
            <h2>Structure HTML complète</h2>
            <p>
                L'interface doit être riche avec plusieurs composants :
            </p>
            <CodeBlock language="html">{htmlStructure}</CodeBlock>
        </section>

        <section>
            <h2>Fonctionnalités à implémenter</h2>
            
            <h3>Gestion des livres :</h3>
            <ul>
                <li>Ajouter un livre avec tous les détails (titre, auteur, ISBN, genre, année, description, pages, note)</li>
                <li>Modifier les informations d'un livre existant</li>
                <li>Supprimer un livre avec confirmation</li>
                <li>Changer le statut d'un livre (disponible, emprunté, réservé)</li>
            </ul>

            <h3>Recherche et filtrage :</h3>
            <ul>
                <li>Recherche en temps réel par titre, auteur ou ISBN</li>
                <li>Filtre par genre</li>
                <li>Filtre par statut (disponible, emprunté, réservé)</li>
                <li>Tri par titre, auteur, année ou note</li>
                <li>Combinaison de plusieurs filtres</li>
            </ul>

            <h3>Interface utilisateur :</h3>
            <ul>
                <li>Grille responsive de cartes de livres</li>
                <li>Modal pour ajouter/modifier des livres</li>
                <li>Indicateurs de statut visuels</li>
                <li>Système de notation par étoiles</li>
                <li>États de chargement avec spinner</li>
            </ul>
        </section>

        <section>
            <h2>Logique JavaScript avancée</h2>
            <p>
                La classe principale doit gérer toute la logique :
            </p>
            <CodeBlock language="js">{jsClass}</CodeBlock>
        </section>

        <section>
            <h2>API Serveur requise</h2>
            <p>
                Votre serveur doit implémenter ces endpoints :
            </p>
            <ul>
                <li><IC>GET /api/books</IC> - Récupérer tous les livres</li>
                <li><IC>GET /api/books/:id</IC> - Récupérer un livre spécifique</li>
                <li><IC>POST /api/books</IC> - Créer un nouveau livre</li>
                <li><IC>PUT /api/books/:id</IC> - Mettre à jour complètement un livre</li>
                <li><IC>PATCH /api/books/:id/status</IC> - Changer le statut d'un livre</li>
                <li><IC>DELETE /api/books/:id</IC> - Supprimer un livre</li>
                <li><IC>GET /api/books/search?q=terme</IC> - Recherche de livres (optionnel)</li>
            </ul>
        </section>

        <section>
            <h2>Modèle de données</h2>
            <p>
                Chaque livre doit avoir la structure suivante :
            </p>
            <CodeBlock language="js">{`{
    id: 1,
    title: "Le Petit Prince",
    author: "Antoine de Saint-Exupéry",
    isbn: "978-2-07-040850-4",
    genre: "fiction",
    year: 1943,
    pages: 96,
    description: "L'histoire d'un petit prince qui voyage...",
    rating: 4.5,
    status: "available", // available, borrowed, reserved
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T10:30:00Z"
}`}</CodeBlock>
        </section>

        <section>
            <h2>Défis techniques avancés</h2>
            <ul>
                <li><strong>Optimisation :</strong> Debouncing pour la recherche, pagination pour de gros catalogues</li>
                <li><strong>Validation :</strong> Validation côté client et serveur des données</li>
                <li><strong>Cache :</strong> Mise en cache des résultats de recherche</li>
                <li><strong>Export :</strong> Possibilité d'exporter le catalogue en CSV/JSON</li>
                <li><strong>Import :</strong> Importer des livres depuis un fichier</li>
                <li><strong>Images :</strong> Gestion des couvertures de livres</li>
                <li><strong>Historique :</strong> Suivi des emprunts et retours</li>
            </ul>
        </section>

        <section>
            <h2>Critères d'évaluation avancés</h2>
            <ul>
                <li><strong>Architecture :</strong> Code bien structuré et modulaire</li>
                <li><strong>UX/UI :</strong> Interface intuitive et responsive</li>
                <li><strong>Performance :</strong> Optimisations et gestion de la mémoire</li>
                <li><strong>Robustesse :</strong> Gestion complète des erreurs</li>
                <li><strong>Fonctionnalités :</strong> Toutes les fonctionnalités avancées</li>
                <li><strong>Tests :</strong> Capacité à tester l'application</li>
            </ul>
        </section>

        <section>
            <h2>Extensions possibles</h2>
            <ul>
                <li>Système d'utilisateurs avec authentification</li>
                <li>Gestion des emprunts avec dates et historique</li>
                <li>Recommandations de livres</li>
                <li>Notifications de retour de livres</li>
                <li>Intégration avec des APIs de livres externes</li>
                <li>Mode hors ligne avec synchronisation</li>
            </ul>
        </section>
    </>
}