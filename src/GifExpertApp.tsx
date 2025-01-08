import { useCallback, useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = useCallback(( newCategory: string) => {
    if (!categories.includes(newCategory)) {
      setCategories((prevCategories) => [ newCategory, ...prevCategories]);
    }
  }, [categories]);

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={ onAddCategory } />
      <ol>
        {categories.map((category: string) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
