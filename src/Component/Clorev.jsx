/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import './clorev.css';

function Clorev() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [subtitles, setSubtitles] = useState([
    { title: '', description: '' },
    { title: '', description: '' },
  ]);
  const [bannerImage, setBannerImage] = useState(null);
  const [subImage, setSubImage] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSummaryChange = (event) => {
    setSummary(event.target.value);
  };

  const handleSubtitleChange = (index, event) => {
    const newSubtitles = [...subtitles];
    newSubtitles[index].title = event.target.value;
    setSubtitles(newSubtitles);
  };

  const handleDescriptionChange = (index, event) => {
    const newSubtitles = [...subtitles];
    newSubtitles[index].description = event.target.value;
    setSubtitles(newSubtitles);
  };

  const handleBannerImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setBannerImage(event.target.files[0]);
    }
  };

  const handleSubImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSubImage(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Title:', title);
    console.log('Summary:', summary);
    console.log('Subtitles:', subtitles);
    console.log('Banner Image:', bannerImage);
    console.log('Sub Image:', subImage);
  };

  return (
    <div className="container">
      <div className="left-side">
        <div className="banner-upload">
          <input type="file" accept="image/*" onChange={handleBannerImageChange} />
        </div>
        <div className="title-input">
          <input
            type="text"
            placeholder="Write some engaging TITLE here <H1>"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="summary-input">
          <textarea
            placeholder="Write SUMMARY/SYNOPSIS here <H4>"
            value={summary}
            onChange={handleSummaryChange}
          />
        </div>
        {subtitles.map((subtitle, index) => (
          <div key={index} className="subtitle-section">
            <div className="subtitle-title">
              <h3 className="subtitle-number">{index + 1}.</h3>
              <input
                type="text"
                placeholder="Write SUB-TITLE <H3>"
                value={subtitle.title}
                onChange={(event) => handleSubtitleChange(index, event)}
              />
            </div>
            <div className="subtitle-description">
              <textarea
                placeholder="Write DESCRIPTION here <H6>"
                value={subtitle.description}
                onChange={(event) => handleDescriptionChange(index, event)}
              />
            </div>
            <div className="subtitle-image">
              <input type="file" accept="image/*" onChange={handleSubImageChange} />
            </div>
          </div>
        ))}
        <div className="buttons">
          <button className="save-draft">Save Draft</button>
          <button className="publish" onClick={handleSubmit}>
            Publish
          </button>
        </div>
      </div>
      <div className="right-side">
        <div className="blog-preview">
          <div className="blog-title">BLOG</div>
          <div className="blog-date">Aug 22, 2024</div>
          <div className="blog-content">
            {/* Placeholder content for the blog preview */}
            <div className="blog-subtitle">
              {/* Render subtitles and their descriptions here */}
            </div>
          </div>
          <div className="blog-actions">
            <button className="blog-delete">Delete</button>
            <button className="blog-edit">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clorev;
