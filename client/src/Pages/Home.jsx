import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-6 pt-10">
          Welcome to the `TODO` Application
          <br /> <span className="text-orange-400">No DB lets use Redux</span>
        </h1>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          What we going to use
        </h1>
        <section className="mb-8">
          <h2 className="hover:scale-110 hover:underline transition-all duration-300 hover:text-orange-400 text-2xl font-semibold text-gray-700 mb-4">
            React Router DOM
          </h2>
          <p className="text-gray-600 leading-relaxed">
            React Router DOM allows you to handle routing in your React
            application. It lets you create{" "}
            <span className="text-orange-500 text-xl">
              multi-page applications with navigation between different pages.
            </span>{" "}
            By setting up different routes, users can interact with your app
            smoothly without full page reloads.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="hover:scale-110 hover:underline transition-all duration-300 hover:text-orange-400 text-2xl font-semibold text-gray-700 mb-4">
            Redux
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Redux is a
            <span className="text-orange-500 text-xl">
              {" "}
              state management tool{" "}
            </span>
            for JavaScript apps. It helps centralize your application's state in
            a single source, making state management more predictable and easier
            to debug. Redux is commonly used with React for managing complex
            state logic.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="hover:scale-110 hover:underline transition-all duration-300 hover:text-orange-400 text-2xl font-semibold text-gray-700 mb-4">
            useState
          </h2>
          <p className=" text-gray-600 leading-relaxed">
            The `useState` hook in React is essential for managing{" "}
            <span className="text-orange-500 text-xl">
              {" "}
              local state in functional components.
            </span>{" "}
            It allows you to declare a state variable and a function to update
            that state. This makes it easier to handle dynamic data within your
            components, like user input or API responses.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
