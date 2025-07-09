
import { useState, useEffect, useRef } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { chennaiRestaurants } from "../data/chennaiRestaurants";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

interface Suggestion {
  type: 'restaurant' | 'dish';
  name: string;
  restaurant?: string;
  id?: string;
}

const SearchBar = ({ onSearch, placeholder = "Search restaurants or dishes" }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      const customRestaurants = JSON.parse(localStorage.getItem('customRestaurants') || '[]');
      const allRestaurants = [...chennaiRestaurants, ...customRestaurants];
      
      const restaurantSuggestions: Suggestion[] = allRestaurants
        .filter(restaurant => 
          restaurant.name.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 5)
        .map(restaurant => ({
          type: 'restaurant',
          name: restaurant.name,
          id: restaurant.id
        }));

      // Create dish suggestions from menu items
      const dishSuggestions: Suggestion[] = [];
      allRestaurants.forEach(restaurant => {
        if (restaurant.menuItems) {
          restaurant.menuItems.forEach(item => {
            if (item.name.toLowerCase().includes(query.toLowerCase())) {
              dishSuggestions.push({
                type: 'dish',
                name: item.name,
                restaurant: restaurant.name,
                id: restaurant.id
              });
            }
          });
        }
      });

      const combinedSuggestions = [
        ...restaurantSuggestions,
        ...dishSuggestions.slice(0, 5)
      ].slice(0, 8);

      setSuggestions(combinedSuggestions);
      setShowSuggestions(true);
      setActiveSuggestion(-1);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = (searchQuery?: string) => {
    const finalQuery = searchQuery || query;
    onSearch(finalQuery);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    setQuery(suggestion.name);
    handleSearch(suggestion.name);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveSuggestion(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveSuggestion(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (activeSuggestion >= 0) {
          handleSuggestionClick(suggestions[activeSuggestion]);
        } else {
          handleSearch();
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setActiveSuggestion(-1);
        break;
    }
  };

  const clearSearch = () => {
    setQuery("");
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div ref={searchRef} className="relative w-full">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Input
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length > 0 && setShowSuggestions(true)}
          className="pl-10 pr-10 h-12"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            onClick={clearSearch}
            className="absolute right-12 top-1 h-10 w-10"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
        <Button 
          onClick={() => handleSearch()}
          size="sm"
          className="absolute right-1 top-1 h-10 bg-orange-500 hover:bg-orange-600"
        >
          Search
        </Button>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-64 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <div
              key={`${suggestion.type}-${suggestion.name}-${index}`}
              className={`px-4 py-3 cursor-pointer hover:bg-gray-50 border-b border-gray-100 last:border-b-0 ${
                index === activeSuggestion ? 'bg-gray-50' : ''
              }`}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">{suggestion.name}</div>
                  {suggestion.type === 'dish' && suggestion.restaurant && (
                    <div className="text-sm text-gray-500">at {suggestion.restaurant}</div>
                  )}
                </div>
                <div className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                  {suggestion.type === 'restaurant' ? 'Restaurant' : 'Dish'}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
