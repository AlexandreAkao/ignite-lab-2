import { useGetLessonsQuery } from '../../graphql/generated';
import Lesson from '../Lesson';

interface ISidebarProps {
  isOpenMenu: boolean;
}

function Sidebar({ isOpenMenu }: ISidebarProps) {
  const { data } = useGetLessonsQuery();

  return (
    <aside
      className={`z-50 min-h-screen md:h-auto fixed md:static right-0 w-[348px] bg-gray-700 p-6 border-l border-gray-600 md:block ${
        !isOpenMenu ? 'sm:hidden' : ''
      }`}
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
