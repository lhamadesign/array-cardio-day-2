const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Is at least one person 19?
  const isAdult = people.some((person) => {
    const currentYear = (new Date()).getFullYear();
    return (currentYear - person.year >= 19);
  });

  // Is everyone 19?
  const areAllAdults = people.every(person => ((new Date()).getFullYear() - person.year >= 19));

  // find the comment with the ID of 823423
  const COMMENT_ID = 823423;
  const comment = comments.find(comment => (comment.id === COMMENT_ID));

  // delete the comment with the ID of 823423
  const commentIndex = comments.findIndex(comment => (comment.id === COMMENT_ID));
  comments.splice(commentIndex, 1);
  
  
  console.table(comments);