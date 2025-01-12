import { useCallback, useState } from 'react';
import { AddCategory, GifGrid } from './components'

const GifExpertApp = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const onAddCategory = useCallback(( newCategory: string) => {
    if (!categories.includes(newCategory)) {
      setCategories((prevCategories) => [ newCategory, ...prevCategories]);
    }
  }, [categories]);

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={ onAddCategory } />
      {
        categories.map((category: string) => (
            <GifGrid key={ category } category={ category }/>
        ))
      }
    </>
  );
};

export default GifExpertApp;
