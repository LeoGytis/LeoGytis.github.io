'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className="hidden absolute top-[-30px] right-6">
        <Image
          src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
          width={36}
          height={36}
          sizes="36x36"
          alt="Loading Light/Dark Toggle"
          priority={false}
          title="Loading Light/Dark Toggle"
        />
      </div>
    );

  return (
    <div className="hidden lg:flex absolute top-[-30px] right-6">
      <input
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        className="switch-checkbox"
        id={`switch`}
        type="checkbox"
        checked={resolvedTheme === 'dark'}
      />
      <label className="switch-label" htmlFor={`switch`}>
        <span className="switch-button" />
      </label>
    </div>
  );
};

export default ThemeSwitch;
