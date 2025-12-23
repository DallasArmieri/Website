module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/projects");
  eleventyConfig.addPassthroughCopy("src/images");

 return {
    dir: { input: "src", output: "_site" },
    pathPrefix: "/Website/"
  };
};