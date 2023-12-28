import profilePic from "/assets/nemiPic.jpg";

export default function About() {
    return (
      <div>
        <h2>about me</h2>
        <br></br>
        <img src={profilePic} alt="Profile" height="150" width="150" style={{ borderRadius: '15px' }} />
        <p>
        <strong>Hello world!</strong> My name is Nohemi Moser and I am a full-stack web developer. With nearly a decade spent in the Charlotte, NC area, I bring a blend of creativity and technical expertise to my work.<br /><br /> I specialize in HTML, CSS, JavaScript, and have hands-on experience with frameworks like React and Node.js. I've contributed to various projects focusing on user-centric design and efficient backend systems.
        <br></br><br></br>
        When I'm not coding, I enjoy cooking, reading, and learning about new topics and hobbies.
        <br></br><br></br>
        I'd love to get in touch to discuss exciting opportunities, please feel free to reach out!
        </p>
      </div>
    );
  }