class Blog {
  constructor() {
    this.blogPosts = []
  }

  getBlogPosts() {
    if(this.blogPosts.length === 0) {
      return "There are 0 blog posts"
    } else {
      return this.blogPosts
    }
  }

  addBlogPost(...args) {   
    this.blogPosts.push(...args)
  }

  getBlogAuthors() {
    var i = []
    i.push(this.blogPosts[1])
    return i
  }

  getSpecificBlogAuthor() {
    
  }

}

module.exports = Blog