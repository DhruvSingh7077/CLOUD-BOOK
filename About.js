import React from 'react'

const About = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">cloudbook 📝</h1>
      <p className="text-lg text-gray-700 mb-6">
        <strong>
          cloudbook is a minimal, fast, and secure app built to help you create,
          store, and manage your notes efficiently. 
          NoteNest keeps your thoughts organized and accessible.
        </strong>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">✨ Features</h2>
      <ul className="text-gray-600 list-disc list-inside mb-6">
        <li><strong>Create and edit notes instantly</strong></li>
        <li><strong>Organize notes by tags or folders</strong></li>
        <li><strong>Search and filter notes quickly</strong></li>
        <li><strong>Secure storage with local/session persistence</strong></li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">🛠 Built With</h2>
      <p className="text-gray-700 mb-6">
        <strong>React, JavaScript, Bootstrap, Redux, Mongo DB and more.</strong>
      </p>

      <h2 className="text-2xl font-semibold mb-2">👨‍💻 About the Creator</h2>
      <p className="text-gray-700">
        <strong>
        Hi, I'm Dhruv Singh, a passionate developer who loves building clean and useful web apps. 
          Feel free to connect or suggest improvements!
        </strong>
      </p>
    </div>
  )
}

export default About
