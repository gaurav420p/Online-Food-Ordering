import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';



const demo = [
  {
    category: "Nuts & Seeds",
    ingredients: ["Cashews"]
  },
  {
    category: "Protein",
    ingredients: ["Ground beef", "Bacon strips"]
  },
  {
    category: "Bread",
    ingredients: ["Hamburger buns"]
  },
  {
    category: "Vegetable",
    ingredients: ["Lettuce", "Tomato slices", "Pickles", "Onion slices"]
  },
  {
    category: "Condiment",
    ingredients: ["Ketchup"]
  }
];

const handleCheckBoxChange=(value)=>{
    console.log("value");
}


const MenuCard = () => {
  return (
    <div>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >

          <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center lg:gap-5">
                <img
                className="w-[7rem] h-[7rem] object-cover"
                src="https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg"
                alt=""
                />
                <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                    <p className="font-semibold text-xl">Burger</p>
                    <p>₹499</p>
                    <p className='text-gray-500'>A hamburger or simply burger is a food consisting of fillings—usually a patty of ground meat,
                         typically beef—placed inside a sliced bun or bread roll.
                    </p> 
                </div>
            </div>
        </div>
         </AccordionSummary>


        <AccordionDetails>
  <form>
    <div className="flex gap-5 flex-wrap">
      {
        demo.map((item) => (
          <div key={item.category}>
            <p>{item.category}</p>
            <FormGroup>
              {
                item.ingredients.map((item) => (
                  <FormControlLabel
                    key={item}
                    control={<Checkbox onChange={()=>handleCheckBoxChange()} />}
                    label={item}
                  />
                ))
              }
            </FormGroup>
          </div>
        ))
      }
    </div>

    <div className='pt-5'>
        <Button variant="contained" disabled={false} type="submit">{true?"Add to Cart":"Out Of Stock"}</Button>
    </div>
  </form>
</AccordionDetails>

      </Accordion>
      
    </div>
  )
}

export default MenuCard
