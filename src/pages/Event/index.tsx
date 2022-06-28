import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Video from '../../components/Video';

function Event() {
  const { slug } = useParams<EventParams>();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar isOpenMenu={isOpenMenu} />
      </main>
    </div>
  );
}

export default Event;
