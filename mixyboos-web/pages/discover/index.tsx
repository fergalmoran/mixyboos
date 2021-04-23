import React from 'react';
import PropTypes from 'prop-types';

const DiscoverPage = () => {
  const genres = [
    'Ambient',
    'Deep House',
    'Electronica',
    'Jazz',
    'House',
    'Hip Hop',
    'Pop',
    'MC Hammer....',
    'Rap',
    'Tech House',
  ];
  return (
    <div className="px-44">
      <div className="grid grid-cols-5 gap-4">
        {genres.map((g) => (
          <div className="justify-center flex flex-wrap relative">
            <div className="my-4 w-96 px-4">
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                target="_blank"
              >
                <div
                  className="shadow-lg rounded-lg text-center p-8"
                  style={{
                    backgroundColor: `#${Math.floor(
                      Math.random() * 16777215
                    ).toString(16)}`,
                  }}
                >
                  <img
                    alt="..."
                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                  />
                  <p className="text-lg text-white mt-4 font-semibold">{g}</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverPage;
