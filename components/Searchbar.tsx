"use client"

import { scrapeAndStoreProduct } from "@/lib/actions";
import { FormEvent, useState } from "react"

const isValidAmazonProductURL = (url: string) => {
  try{
    const parsedURL = new URL(url);
    const hostname =  parsedURL.hostname;

    //check iff hostname contains amazon.com or amazon.ca
    if(
      hostname.includes('amazon.com') || 
      hostname.includes ('amazon.') || 
      hostname.endsWith('amazon')
    ){
      return true;
    }
  }catch(error){
    return false;


  }
  return false;

}

const Searchbar = () => { // This defines a component called Searchbar

    const [searchPrompt, setSearchPrompt] = useState(''); // This initializes a state variable for the search prompt and a function to update it
    const [isLoading, setIsloading] = useState(false); // This initializes a state variable for loading status and a function to update it

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => { // This defines a function to handle form submission
      event.preventDefault(); // This prevents the default form submission behavior

      const  isValidLink = isValidAmazonProductURL(searchPrompt); // This checks if the entered link is a valid Amazon product URL

      if(!isValidLink) return alert('Please provide a valid Amazon link') // If the link is not valid, it shows an alert message

        try {
          setIsloading(true); // This sets the loading state to true

          //scrape the product page
          const product = await scrapeAndStoreProduct(searchPrompt);
        } catch (error) { // This catches any errors that occur during scraping
          console.log(error); // This logs the error to the console
        } finally { // This block of code will always run, regardless of whether there was an error or not
          setIsloading(false); // This sets the loading state back to false
        }
    }

  return (
    <form
    className='flex flex-wrap gap-4 mt-12' // This sets the class names for styling
    onSubmit={handleSubmit} // This sets the handleSubmit function to run when the form is submitted
    >
        <input
            type="text"
            value={searchPrompt}
            onChange={(e) => setSearchPrompt(e.target.value)} // This updates the search prompt state when the input value changes
            placeholder="Enter product link" // This sets the placeholder text for the input field
            className="searchbar-input" // This sets the class name for styling
        />

        <button 
          type="submit" 
          className="searchbar-btn" // This sets the class name for styling
          disabled={searchPrompt ===''} // This disables the button if the search prompt is empty
        >
            {isLoading ? 'Searching...' : 'Search'} 
        </button>

    </form>
  )
}


export default Searchbar