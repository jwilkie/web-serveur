import { getIndexOfPages } from "@/model/pageIndex";
import SearchResults from "@/components/SearchResults";

export default async function Search() {
    const index = await getIndexOfPages();

    return <>
        <h1>Résultats de recherche</h1>
        <SearchResults index={index} />
    </>
}