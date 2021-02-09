import React from 'react';

const PhotoCard = ({ photo }) => {
  // * turn tags into an array
  const tags = photo.tags.split(',');

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={photo.webformatURL} alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl-mb-2">
          Photo by {photo.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {photo.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {photo.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {photo.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default PhotoCard;