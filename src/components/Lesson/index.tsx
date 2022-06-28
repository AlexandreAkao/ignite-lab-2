import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
import classnames from 'classnames';

function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const { slug: paramsSlug } = useParams<{ slug: string }>();
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  });

  const isActiveLesson = paramsSlug === slug;

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={classnames(
          'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors',
          {
            'bg-green-500': isActiveLesson,
          },
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classnames('text-sm font-medium flex items-center gap-2', {
                'text-white': isActiveLesson,
                'text-blue-500': !isActiveLesson,
              })}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={classnames('text-xs rounded px-2 py-[0.125rem] text-white border', {
              'border-white': isActiveLesson,
              'border-green-300': !isActiveLesson,
            })}
          >
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong
          className={classnames('mt-5 block', {
            'text-white': isActiveLesson,
            'text-gray-200': !isActiveLesson,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
}

export default Lesson;
