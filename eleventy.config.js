module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/projects");

 return {
    dir: { input: "src", output: "_site" },
    pathPrefix: "/Website/" // your repo name
  };
};