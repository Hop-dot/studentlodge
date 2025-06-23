const allPosts = [
  {
    title: "Do You Really Need XML in 2025? When to Use It (and When Not To)",
    label: "Educational/Explainer",
    thumbnail: "https://imgur.com/XPsdU1e.jpg",
    summary:
      "XML sounds like one of those tech terms from the early 2000s that probably should have stayed there. Maybe you heard about it in class, or saw it pop up when opening some weird-looking file in Notepad.",
    link: "https://www.studentlodge.xyz/blog/do-you-really-need-xml.html",
  },

  {
    title: "How to Format HTML Correctly Before Converting to XML",
    label: "Tool-Focused How-To",
    thumbnail: "https://imgur.com/Xj28Eut.jpg",
    summary:
      "Nothing is more frustrating than spending hours typing out your HTML, pasting it into a converter tool, and watching it completely fail. Maybe the XML result is empty. ",
    link: "https://www.studentlodge.xyz/blog/how-to-format-html-correctly.html",
  },

  {
    title: "How to Host a Free HTML Project on GitHub Pages in 2025",
    label: "Complementary Tech",
    thumbnail: "https://imgur.com/gEg5iYM.jpg",
    summary:
      "Let me guess — you just wrapped up your first HTML project. It might be a university assignment, your personal portfolio, or even a “just-for-fun” website you're proud of. You’re feeling good, maybe even a little hyped… until you realize one important thing: your code is stuck on your laptop.",
    link: "https://www.studentlodge.xyz/blog/how-to-host-free-website-in-github.html",
  },

  {
    title: "Here's How XML Is Used in Web Development & Data Science!",
    label: "Educational/Explainer",
    thumbnail: "https://imgur.com/ttSFdaG.jpg",
    summary:
      "When you hear "XML," your brain probably hits snooze. It sounds technical, old-school, and not something you’d naturally care about unless you're knee-deep in code or obsessed with markup languages.",
    link: "https://www.studentlodge.xyz/blog/how-xml-is-used-in-web.html",
  },
  
  {
    title: "Why Is My HTML Not Converting to XML Properly? Common Fixes (For Students)",
    label: "Tool-Focused How-To",
    thumbnail: "https://imgur.com/lATsWa5.jpg",
    summary:
      "You finally completed your HTML assignment, clicked the shiny 'Convert to XML' button on the Student Lodge tool, and instead of celebrating, you got hit with errors.",
    link: "https://www.studentlodge.xyz/blog/html-not-converting-properly.html",
  },

  {
    title: "HTML Tags That Don’t Translate Well to XML (& How to Fix Them)",
    label: "Tool-Focused How-To",
    thumbnail: "https://imgur.com/AYjNJeK.jpg",
    summary:
      "Let’s be real for a second — converting HTML to XML is one of those things that sounds simple in theory... until it throws 47 errors at you and nothing works.",
    link: "https://www.studentlodge.xyz/blog/html-tags-that-dont-translate-well.html",
  },

  {
    title: "How to Convert HTML to XML Without Installing Any Software",
    label: " Tool-Focused How-To",
    thumbnail: "https://imgur.com/tEXT3ot.jpg",
    summary:
      "If you found your way to this article, you’re probably under pressure. Maybe your lecturer or tutor just told you to "Submit in XML format" and you're staring at your laptop wondering, "What even is XML? And why do I need to convert my HTML?"",
    link: "https://www.studentlodge.xyz/blog/html-to-xml-software.html",
  },

  {
    title: "What’s the Difference Between HTML and XML? (For Beginners)",
    label: "Educational/Explainer",
    thumbnail: "https://imgur.com/vC9S2i8.jpg",
    summary:
      "Whether you're in a Computer Science course, fiddling with a blog layout, or just trying to submit something through your uni portal, you’ve probably seen weird-looking code blocks with things like <div>, <student>, or even <body>. Some of it works. Some of it breaks. Some of it makes you want to throw your laptop out the res window.",
    link: "https://www.studentlodge.xyz/blog/html-vs-xml.html",
  },

  {
    title: "Top 5 Free Online Tools Every Coding Student Should Bookmark",
    label: "Complementary Tech Content",
    thumbnail: "https://www.studentlodge.xyz/blog/top-free-online-tools.html.jpg",
    summary:
      "Let’s be real for a second. Learning to code is hard enough without all the gatekeeping and jargon you get slammed with online.",
    link: "https://www.studentlodge.xyz/blog/top-free-online-tools.html",
  },

  {
    title: "Why Do Some University Assignments Require XML Instead of HTML?",
    label: "Educational/Explainer",
    thumbnail: "https://imgur.com/pC66fKB.jpg",
    summary:
      "You’re cruising through your course content, ticking off assignments, and then — boom — you hit a brick wall. “Create your submission using XML.” Not HTML. Not a Google Doc. XML. You stare at the screen for a second, hoping it's a typo. But nope. It’s real. And it’s confusing.",
    link: "https://www.studentlodge.xyz/blog/why-do-universities-assignments-require.html",
  },
];

const blogPostsContainer = document.querySelector(".blog-posts-container");

const generatePostsHTML = () => {
  allPosts.forEach((p) => {
    const HTML = `<div class="thumbnail">
        <img src="${p.thumbnail}" alt="" />
      </div>

      <div class="text-content">
        <div class="label">${p.label}</div>
        <h3 class="post-title">
          ${p.title}
        </h3>
        <div class="summary">
          ${p.summary}
        </div>
        <a class="read-more-btn" href="${p.link}">Read More...</a>
      </div>`;

    const blogPost = document.createElement("div");
    blogPost.classList.add("blog-post");
    blogPost.innerHTML = HTML;

    blogPostsContainer.appendChild(blogPost);
  });
};

generatePostsHTML();
