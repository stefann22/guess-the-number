import React from 'react'
import GuessListLine from './GuessListLine'

// Define the type for each guess object
interface Guess {
  item: number; // Adjust the type of 'item' based on your actual data
  fixed: number;
  loose: number;
}

// Define the props for the GuessList component
interface GuessListProps {
  guesses: Guess[]; // An array of Guess objects
}

const GuessList: React.FC<GuessListProps> = ({ guesses }) => {
  return (
    <div>
      {guesses.map((guess, index) => (
        <GuessListLine key={index} item={guess.item} fixed={guess.fixed} loose={guess.loose} />
      ))}
    </div>
  );
}

export default GuessList;