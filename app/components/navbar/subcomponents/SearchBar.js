'use client'
import { useEffect, useState } from "react";
export default function SearchBar () {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const [data, setData] = useState([
        "Song 1", "Artist 1", "Lyrics 1", 
        "Song 2", "Artist 2", "Lyrics 2", 
        "Song 3", "Artist 3", "Lyrics 3"
    ]);

    useEffect(() => {
        if (searchQuery.length > 0) {
            const filtered = data.filter(item =>
                item.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredResults(filtered);
        } else {
            setFilteredResults([]);
        }
    }, [searchQuery, data]);
    
    return (
        <div>
            <div className="w-full absolute top-[60px] left-0 bg-white shadow-lg z-40 px-5 py-3">
                    <input 
                        type="text" 
                        value={searchQuery} 
                        onChange={(e) => setSearchQuery(e.target.value)} 
                        className="w-full border rounded-md p-3 focus:outline-none" 
                        placeholder="Search for songs, artists, lyrics..."
                    />
                    <div className="bg-white w-full mt-2 max-h-48 overflow-y-auto">
                        {filteredResults.length > 0 ? (
                            filteredResults.map((result, index) => (
                                <div key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
                                    {result}
                                </div>
                            ))
                        ) : (
                            <div className="p-2 text-gray-500">
                                {searchQuery ? "No results found" : "Start typing to search..."}
                            </div>
                        )}
                    </div>
                </div>
        </div>
    )
}