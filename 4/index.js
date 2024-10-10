document.addEventListener('DOMContentLoaded', () => {
    const toggleNavButton = document.getElementById('toggle-nav');
    const pagesNavbarTop = document.querySelector('.pages-navbar-top');
    const pagesNavbarBottom = document.querySelector('.pages-navbar-bottom');
    const storyTime = document.getElementById('story-time'); // Reference to the time element
    const videoElement = document.getElementById('background-video'); // Reference to the video element

    // Video sources
    const videoSources = [
        './assets/1.mp4',
        './assets/2.mp4',
        './assets/3.mp4',
        './assets/4.mp4',
        './assets/5.mp4',
        './assets/6.mp4'
    ];

    // Hide the pages navbar initially
    pagesNavbarTop.style.display = 'none';
    pagesNavbarBottom.style.display = 'none';
    storyTime.innerText = ""; // Ensure time is hidden initially

    // Function to set a random video
    function setRandomVideo() {
        const randomIndex = Math.floor(Math.random() * videoSources.length);
        videoElement.src = videoSources[randomIndex];
        videoElement.play(); // Start playing the selected video
    }

    toggleNavButton.addEventListener('click', () => {
        const isTopVisible = pagesNavbarTop.style.display === 'flex'; // Check if the top navbar is currently visible

        // Toggle display style of the hidden navbars
        pagesNavbarTop.style.display = isTopVisible ? 'none' : 'flex';
        pagesNavbarBottom.style.display = isTopVisible ? 'none' : 'flex';
    });

    // Combined stories and authors
    const content = [
        {
            story: "My ride from Sutphin to Roosevelt is generally smooth, quiet, and because it is the longest, is the one where I do most of my reading. Right now I am reading an autobiography of a man who was enslaved and brought to America in the 1800s and it has many illustrations and drawings of the period. As I was reading my book (always standing against the door) a black man approached me, begging some coins. He took a look at my book and saw a picture of a slave man being whipped. The man looked into my eyes and gave an expression of disgust as I told him I did not have any money. It is funny how fast people can draw conclusions and beliefs based on the most unimaginable details.",
            author: "06.07.06",
            time: "8:00"
        },
        {
            story: "There are good things happening in Flushing [station]. This morning a dark, short Native American was playing a musical instrument made of bamboo tubes, from the shortest and increased in length in order… His hair is dark and long, very typical of a Native American. He had two speakers set up, large traveling bag open before his feet, and he stood and played that beautiful melody with his flute near the microphone. There was some change in the large open bag before him. There were also some CDs. His mellifluous melody is the closest thing I ever heard to nature. The music has a pristine quality of innocence. This morning was not his first performance. The first time I saw him play about two days ago I had the strong impulse of buying his CD (But I was broke, plus I was hurrying into the station.) If I’m at the entrance to the station the tendency is not just to simply go in, but hurry in no matter how early you are. It is one of the habits of New Yorkers. When you are in the habit of hurrying, somewhere along the line you’ll forget why you are hurrying.",
            author: "06.14.06",
            time: "11:00"
        },
        {
            story: "Throughout the conversation I look at a publicity board of La Guardia College, which is behind two sitting Asians (boyfriend and girlfriend–kissing). They apparently think I’m looking at them because they give me one of those annoyed looks. For a mere moment, they just look at me and I understand immediately why they’re doing so. So I turn to my friends and ignore them [the Asians] throughout the whole trip.",
            author: "06.07.06",
            time: "16:40"
        },
        {
            story: "This woman, probably in her 20s, keeps looking at me. I try to pretend she is not, but I catch her glances when she looked at me. I don’t know what she was looking at. She might be looking at my shirt. (I personally think it’s cute. It’s red, and it has Disney characters.) This guy, about late 20s, was reading a newspaper (Newsday I believe). He opened up the newspaper in front of his face. Hmm ... he is looking at the woman sitting across from him. But he is still pretending he is reading his newspaper. I wonder what he is looking at. I found it funny because sometimes people look at you, but pretending they are not. They are looking at you, and you catch them but still don’t ask what are you looking at. I think it’s the subway[‘s] unspoken manners.",
            author: "06.15.06",
            time: "11:57"
        },
        {
            story: "Curiously, I was looking at the advertisement posters when I see a young girl looking at me with attitude and I didn’t know why. She was with her friend and I could see how both girls look at me and talk. Really, I was getting mad, because I don’t know them so she doesn’t have the right to look at me like that. So what I did was both girls got off at 74th street and I did something because I was taking the E train. It was 8:40 a.m. and both girls take the same direction as me. When we was waiting for the train I tell them why both was looking at me and if one of them knows me because I want to know what is the problem. The girls got nervous and tell me that they admired my skirt and I start laughing and I leave.",
            author: "06.15.06",
            time: "8:40"
        },
        {
            story: "Today I’m going to take the 7 train in Queens Plaza because I decided to walk with my friend, because the day looks beautiful. I’m still waiting for the 7 local train. During that time I’m playing with a little ball with my friend [and more teenagers begin] to play with us. The police man is around here and he looks like he doesn’t like what we are doing... Finally the train is coming and we [are] all going to take because we don’t want to get in trouble. We are three girls and four guys. We start playing in the wagon. Actually, we think the people located on the seats up bother them but we didn’t pay attention... Also a little kid came where we are and started to play with us. His mother called him. We all started laughing because he tried to be like us.",
            author: "06.12.06",
            time: "15:17"
        }
    ];

    // Function to randomize content
    function randomizeContent() {
        const randomIndex = Math.floor(Math.random() * content.length);

        // Update story and author text
        const storyText = document.getElementById('story-text');
        const diaryInfo = document.getElementById('diary-info');

        storyText.textContent = content[randomIndex].story;
        diaryInfo.textContent = content[randomIndex].author;
        storyTime.textContent = content[randomIndex].time; // Update time text
    }

    // Attach the randomize function to the LINE button
    document.getElementById('randomize-button').addEventListener('click', () => {
        randomizeContent();
        setRandomVideo(); // Set a random video on button click

        // Get all .time elements and toggle the 'active' class
        const storyTimeElements = document.querySelectorAll('.time');
        storyTimeElements.forEach((time) => {
            time.classList.add('active'); // Add the 'active' class for margin adjustment
        });
    });

    // Set a random video when the page loads
    setRandomVideo();
});
