import React, { useState } from 'react';
import WindowWrapper from '#hoc/WindowWrapper';
import { WindowControls } from '#components';
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  PanelLeft,
  Plus,
  Share,
  ShieldHalf,
  Search,
  MoveRight,
} from 'lucide-react';
import { blogPosts } from '#constants';

const Safari = () => {
  const [input, setInput] = useState('');
  const [url, setUrl] = useState(null);


  const goHome = () => {
    setUrl(null);
    setInput('');
  };

  const handleNavigate = () => {
    if (!input.trim()) return;
    let finalUrl = input.trim();
    if (!/^https?:\/\//i.test(finalUrl)) {
         finalUrl = `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(finalUrl)}`;

    }

    if (/google\.com|github\.com|stackoverflow\.com/i.test(finalUrl)) {
      window.open(finalUrl, '_blank');
      return;
    }

    setUrl(finalUrl);
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />
        <PanelLeft className="ml-10 icon" onClick={goHome} />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" onClick={goHome} />
          <ChevronRight className="icon opacity-40 pointer-events-none" />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />
          <div className="search flex">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search or enter website name"
              className="flex-1 bg-transparent outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleNavigate()}
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      {url ? (
        <iframe
            src={url}
            title="Safari iframe"
            className="absolute left-0 w-full border-none"
            style={{
            top: '56px',
            height: 'calc(100% - 56px)',
            }}
            sandbox="allow-scripts allow-forms allow-popups"
        />

      ) : (
        <div className="blog">
          <h2>My Posts</h2>
          <div className="space-y-8">
            {blogPosts.map(({ id, image, title, date, link }) => (
              <div key={id} className="blog-post">
                <div className="col-span-2">
                  <img src={image} alt={title} />
                </div>
                <div className="content">
                  <p>{date}</p>
                  <h3>{title}</h3>
                  <a href={link} target="_blank" rel="noreferrer noopener">
                    Check out full post <MoveRight className="icon-hover" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, 'safari');
export default SafariWindow;
