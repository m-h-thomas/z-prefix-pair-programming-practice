class Blog {
  constructor(posts = [], authors = [], genres = [], comments = []) {
    this.posts = posts
    this.authors = authors
    this.genres = genres
    this.comments = comments
  }

  getBlogPosts(){
    if (this.posts.length > 0){
      return this.posts;
    }
    else {
      return "There are 0 blog posts";
    }
  }

  addBlogPost(post, author, genre){
    this.posts.push(post);
    this.authors.push(author)
    this.genres.push(genre)
    this.comments.push([])
  }

  getBlogAuthors(){
    return this.authors;
  }

  getSpecificBlogAuthor(post) {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i] === post) {
        if (this.authors[i]) {
          return this.authors[i];
        } else {
          return "Blog has no author";
        }
      }
    }
    return "No such blog post";
  }

  getBlogsFromGenre(genre) {
    const matchingBlogs = [];

    for (let i = 0; i < this.genres.length; i++) {
      if (this.genres[i] === genre) {
        matchingBlogs.push({
          title: this.posts[i],
          author: this.authors[i],
          genre: this.genres[i]
        });
      }
    }

    if (matchingBlogs.length > 0) {
      return matchingBlogs;
    } else {
      return "No blog posts with that genre";
    }
  }

  getAllGenres(){
    if (this.genres.length > 0) {
      return this.genres
    } else {
      return "There are no genres available"
    }
  }

  addComment(post, user, comment) {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i] === post) {
        this.comments[i].push({ user, comment });
      }
    }
  }


  getBlogComments(post) {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i] === post) {
        const postComments = this.comments[i] || [];
        if (postComments.length === 0) {
          return [];
        } else {
          return [{ comments: postComments }];
        }
      }
    }
    return "No such blog post";
  }

  getCommentsBy(user) {
    const result = [];

    for (let i = 0; i < this.comments.length; i++) {
      const postComments = this.comments[i] || [];

      for (let j = 0; j < postComments.length; j++) {
        if (postComments[j].user === user) {
          result.push({
            article: this.posts[i],
            comment: postComments[j].comment
          });
        }
      }
    }

    if (result.length > 0) {
      return { user: user, comments: result };
    } else {
      return "No comments found";
    }
  }

  deleteBlog(post) {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i] === post) {
        // Remove the blog data from all parallel arrays
        const deletedPost = {
          post: this.posts.splice(i, 1)[0],
          author: this.authors.splice(i, 1)[0],
          genre: this.genres.splice(i, 1)[0],
          comments: this.comments.splice(i, 1)[0]
        };
        return deletedPost;
      }
    }
    return "No such blog post";
  }


}

module.exports = Blog