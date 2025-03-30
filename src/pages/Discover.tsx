
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArtworkGrid from '@/components/ArtworkGrid';
import CategoryFilter from '@/components/CategoryFilter';
import { artworks, categories } from '@/data/artworks';
import { Artwork } from '@/types';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Discover = () => {
  const [filteredArtworks, setFilteredArtworks] = useState<Artwork[]>(artworks);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter artworks based on category and search query
  useEffect(() => {
    let filtered = [...artworks];
    
    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter(artwork => artwork.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(artwork => 
        artwork.title.toLowerCase().includes(query) || 
        artwork.artist.name.toLowerCase().includes(query) ||
        artwork.medium.toLowerCase().includes(query) ||
        artwork.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredArtworks(filtered);
  }, [activeCategory, searchQuery]);

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-medium">Discover Artworks</h1>
            <p className="text-muted-foreground mt-2">Explore our collection of fine art from around the world</p>
          </div>
          
          <div className="mt-4 md:mt-0 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                type="text"
                placeholder="Search artworks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
        
        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory} 
          onSelectCategory={handleCategorySelect} 
        />
        
        {filteredArtworks.length > 0 ? (
          <ArtworkGrid artworks={filteredArtworks} />
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No artworks found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search query</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Discover;
