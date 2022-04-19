import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

   const [categories, setCategories] = useState(['One Punch']);

   return (
      <>
         <h2>GifExpertApp</h2>
         <AddCategory
            setCategories={setCategories}
         />
         <hr />

         <ol>
            {
               categories.map(cat =>
                  <GifGrid
                     key={cat}
                     category={cat}
                  />
               )
            }
         </ol>
      </>
   )
}

GifExpertApp.propTypes = {}

export default GifExpertApp