import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Liste de tâches avec interface",
    description: "Exercice pratique de création d'une application CRUD complète avec HTML, CSS et JavaScript pour gérer une liste de tâches.",
    keywords: ["laboratoire", "crud", "todo", "liste", "tâches", "interface", "html", "css", "javascript"],
    group: "lab"
}

const htmlStructure = 
`<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestionnaire de Tâches</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Gestionnaire de Tâches</h1>
        
        <!-- Formulaire d'ajout -->
        <form id="task-form" class="task-form">
            <input type="text" id="task-input" placeholder="Nouvelle tâche..." required>
            <button type="submit">Ajouter</button>
        </form>
        
        <!-- Filtres -->
        <div class="filters">
            <button class="filter-btn active" data-filter="all">Toutes</button>
            <button class="filter-btn" data-filter="pending">En cours</button>
            <button class="filter-btn" data-filter="completed">Terminées</button>
        </div>
        
        <!-- Liste des tâches -->
        <ul id="task-list" class="task-list">
            <!-- Les tâches seront ajoutées ici dynamiquement -->
        </ul>
        
        <!-- Statistiques -->
        <div class="stats">
            <span id="total-tasks">0 tâche(s)</span>
            <span id="completed-tasks">0 terminée(s)</span>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`;

const cssStyles = 
`.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

.task-form {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.task-form input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.task-form button {
    padding: 10px 20px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.filters {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.filter-btn {
    padding: 8px 16px;
    border: 1px solid #ddd;
    background: white;
    cursor: pointer;
    border-radius: 4px;
}

.filter-btn.active {
    background: #007bff;
    color: white;
}

.task-list {
    list-style: none;
    padding: 0;
}

.task-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #ddd;
    margin-bottom: 5px;
    border-radius: 4px;
}

.task-item.completed {
    opacity: 0.6;
    text-decoration: line-through;
}

.task-item input[type="checkbox"] {
    margin-right: 10px;
}

.task-text {
    flex: 1;
}

.task-actions {
    display: flex;
    gap: 5px;
}

.btn-edit, .btn-delete {
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

.btn-edit {
    background: #28a745;
    color: white;
}

.btn-delete {
    background: #dc3545;
    color: white;
}

.stats {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding: 10px;
    background: #f8f9fa;
    border-radius: 4px;
}`;

const jsLogic = 
`class TaskManager {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.bindEvents();
        this.render();
    }

    bindEvents() {
        document.getElementById('task-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addTask();
        });

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setFilter(e.target.dataset.filter);
            });
        });
    }

    async addTask() {
        const input = document.getElementById('task-input');
        const text = input.value.trim();

        if (!text) return;

        try {
            const response = await fetch('/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text, completed: false })
            });

            if (response.ok) {
                const task = await response.json();
                this.tasks.push(task);
                input.value = '';
                this.saveAndRender();
            }
        } catch (error) {
            console.error('Erreur lors de l\\'ajout:', error);
            // Fallback local si le serveur n'est pas disponible
            const task = {
                id: Date.now(),
                text,
                completed: false
            };
            this.tasks.push(task);
            input.value = '';
            this.saveAndRender();
        }
    }

    async toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (!task) return;

        task.completed = !task.completed;

        try {
            await fetch(\`/api/tasks/\${id}\`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ completed: task.completed })
            });
        } catch (error) {
            console.error('Erreur lors de la mise à jour:', error);
        }

        this.saveAndRender();
    }

    async deleteTask(id) {
        if (!confirm('Supprimer cette tâche ?')) return;

        try {
            await fetch(\`/api/tasks/\${id}\`, { method: 'DELETE' });
            this.tasks = this.tasks.filter(t => t.id !== id);
            this.saveAndRender();
        } catch (error) {
            console.error('Erreur lors de la suppression:', error);
        }
    }

    setFilter(filter) {
        this.currentFilter = filter;
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        this.render();
    }

    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'pending':
                return this.tasks.filter(t => !t.completed);
            case 'completed':
                return this.tasks.filter(t => t.completed);
            default:
                return this.tasks;
        }
    }

    render() {
        const taskList = document.getElementById('task-list');
        const filteredTasks = this.getFilteredTasks();

        taskList.innerHTML = filteredTasks.map(task => \`
            <li class="task-item \${task.completed ? 'completed' : ''}">
                <input type="checkbox" \${task.completed ? 'checked' : ''} 
                       onchange="taskManager.toggleTask(\${task.id})">
                <span class="task-text">\${task.text}</span>
                <div class="task-actions">
                    <button class="btn-edit" onclick="taskManager.editTask(\${task.id})">
                        Modifier
                    </button>
                    <button class="btn-delete" onclick="taskManager.deleteTask(\${task.id})">
                        Supprimer
                    </button>
                </div>
            </li>
        \`).join('');

        this.updateStats();
    }

    updateStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;

        document.getElementById('total-tasks').textContent = \`\${total} tâche(s)\`;
        document.getElementById('completed-tasks').textContent = \`\${completed} terminée(s)\`;
    }

    saveAndRender() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        this.render();
    }
}

// Initialiser l'application
const taskManager = new TaskManager();`;

export default function Page() {
    return <>
        <section>
            <h2>Laboratoire : Liste de tâches avec interface</h2>
            <p>
                Dans ce laboratoire, vous allez créer une application complète de gestion de tâches (Todo List) qui utilise 
                toutes les techniques apprises dans ce module. L'application permettra de créer, lire, mettre à jour et 
                supprimer des tâches (opérations CRUD) avec une interface utilisateur moderne.
            </p>
        </section>

        <section>
            <h2>Objectifs</h2>
            <ul>
                <li>Créer une interface HTML/CSS responsive</li>
                <li>Implémenter les opérations CRUD côté client</li>
                <li>Utiliser l'API Fetch pour communiquer avec le serveur</li>
                <li>Gérer les erreurs et les états de chargement</li>
                <li>Persister les données localement et sur le serveur</li>
                <li>Implémenter des filtres et des statistiques</li>
            </ul>
        </section>

        <section>
            <h2>Structure HTML</h2>
            <p>
                Créez un fichier <IC>index.html</IC> avec la structure suivante :
            </p>
            <CodeBlock language="html">{htmlStructure}</CodeBlock>
        </section>

        <section>
            <h2>Styles CSS</h2>
            <p>
                Créez un fichier <IC>styles.css</IC> pour styliser votre application :
            </p>
            <CodeBlock language="css">{cssStyles}</CodeBlock>
        </section>

        <section>
            <h2>Logique JavaScript</h2>
            <p>
                Créez un fichier <IC>script.js</IC> avec la logique de l'application :
            </p>
            <CodeBlock language="js">{jsLogic}</CodeBlock>
        </section>

        <section>
            <h2>API Serveur requis</h2>
            <p>
                Votre serveur Express doit implémenter les endpoints suivants :
            </p>
            <ul>
                <li><IC>GET /api/tasks</IC> - Récupérer toutes les tâches</li>
                <li><IC>POST /api/tasks</IC> - Créer une nouvelle tâche</li>
                <li><IC>PATCH /api/tasks/:id</IC> - Mettre à jour une tâche</li>
                <li><IC>DELETE /api/tasks/:id</IC> - Supprimer une tâche</li>
            </ul>
        </section>

        <section>
            <h2>Fonctionnalités à implémenter</h2>
            <h3>Fonctionnalités de base :</h3>
            <ul>
                <li>Ajouter une nouvelle tâche</li>
                <li>Marquer une tâche comme terminée</li>
                <li>Supprimer une tâche</li>
                <li>Afficher le nombre total et le nombre de tâches terminées</li>
            </ul>

            <h3>Fonctionnalités avancées :</h3>
            <ul>
                <li>Filtrer les tâches (toutes, en cours, terminées)</li>
                <li>Modifier le texte d'une tâche existante</li>
                <li>Persistence locale avec localStorage</li>
                <li>Synchronisation avec le serveur</li>
                <li>Gestion des erreurs réseau</li>
                <li>Interface responsive</li>
            </ul>
        </section>

        <section>
            <h2>Défis supplémentaires</h2>
            <ul>
                <li><strong>Drag & Drop :</strong> Permettre de réorganiser les tâches</li>
                <li><strong>Catégories :</strong> Ajouter un système de catégories/tags</li>
                <li><strong>Dates :</strong> Ajouter des dates d'échéance</li>
                <li><strong>Recherche :</strong> Implémenter une fonction de recherche</li>
                <li><strong>Mode hors ligne :</strong> Fonctionnement sans connexion</li>
                <li><strong>Animations :</strong> Ajouter des transitions CSS</li>
            </ul>
        </section>

        <section>
            <h2>Critères d'évaluation</h2>
            <ul>
                <li><strong>Fonctionnalité :</strong> Toutes les opérations CRUD fonctionnent</li>
                <li><strong>Interface :</strong> Design propre et utilisable</li>
                <li><strong>Code :</strong> Organisation et lisibilité du code</li>
                <li><strong>Gestion d'erreurs :</strong> Traitement approprié des erreurs</li>
                <li><strong>Responsivité :</strong> Fonctionne sur mobile et desktop</li>
            </ul>
        </section>
    </>
}