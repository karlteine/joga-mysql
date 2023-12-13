const db = require('../utils/db');

const getAuthorById = (req, res) => {
    const authorId = req.params.author_id;
  
    // Implement SQL query to get author by ID
    const authorSql = `SELECT * FROM author WHERE id="${authorId}"`;
  
    db.query(authorSql, (error, authorResult) => {
      if (error) throw error;
  
      // Implement SQL query to get articles by author ID
      const articlesSql = `SELECT * FROM article WHERE author_id="${authorId}"`;
  
      db.query(articlesSql, (error, articlesResult) => {
        if (error) throw error;
  
        // Render the author's profile view and pass the author and articles details
        res.render('author', { author: authorResult[0], articles: articlesResult });
      });
    });
  };

const getAuthorArticles = (req, res) => {
  const authorId = req.params.author_id;

  // Implement SQL query to get articles by author ID
  const sql = `SELECT * FROM article WHERE author_id="${authorId}"`;

  db.query(sql, (error, articlesResult) => {
    if (error) {
      console.error('Error retrieving articles:', error);
      throw error;
    }

    // Check if articlesResult is not empty
    if (articlesResult.length > 0) {
      // Render the author's articles view and pass the author and articles details
      res.render('author', { author: req.params.author_id, articles: articlesResult });
    } else {
      res.render('author', { author: req.params.author_id, articles: [] });
    }
  });
};

module.exports = {
  getAuthorById,
  getAuthorArticles,
};
