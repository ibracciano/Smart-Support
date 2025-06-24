// src/pages/Auth.tsx

// import React from "react";
import { Link } from "react-router-dom";
import LogoGithub from "../../assets/github.svg";

const Register = () => {
  return (
    <div className="w-full min-h-screen py-10  flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          INSCRIPTION SMART SUPPORT
        </h2>

        {/* Social Login */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Connexion avec Google</span>
          </button>
          <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/157818/facebook.svg"
              alt="Facebook"
              className="w-5 h-5"
            />
            <span>Connexion avec Facebook</span>
          </button>
          <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            <img src={LogoGithub} alt="GitHub" className="w-5 h-5" />
            <span>Connexion avec Github</span>
          </button>
        </div>

        {/* or/ou */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-3 text-gray-500 text-sm">ou</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Username/Email/Password Login */}
        <form className="space-y-4">
          {/* input username */}
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* input email */}
          <input
            type="email"
            placeholder="Adresse Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* input password */}
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Confirmation mot de passe"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            S'inscrire
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          J'ai déjà un compte?{" "}
          <Link
            to="/connexion"
            className="text-blue-600 font-medium hover:underline"
          >
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
