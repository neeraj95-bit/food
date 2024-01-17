import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
     <Box sx={{
      my:15,
      textAlign:'center',
      padding:2,

      "& h4":{
        fontWeight:"bold",
        my: 2,
        fontSize: '2rem',
      },
      "& p":{
        textAlign:'justify'
      },
      "@media (max-width:600px)":{
        mt:0,
        "& h4" :{
          fontSize: '1.5rem'
        }
      }
     }}>
      <Typography variant='h4'  fontFamily='cursiv'>
        Welcome To My Resturant
      </Typography>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dicta consectetur fugit id quas. Quae nostrum inventore temporibus optio iure debitis porro corporis pariatur, praesentium perspiciatis at dolorum enim accusantium obcaecati nulla ex vel quisquam laborum impedit eligendi ipsa explicabo, voluptatibus atque? Optio enim debitis inventore minus beatae possimus accusamus quam amet aspernatur voluptates facere quaerat quibusdam, modi labore officia vero, eaque earum fuga laboriosam, dolor tempore magnam ex! Cumque repellat incidunt debitis cupiditate hic, voluptate fugit aspernatur accusamus necessitatibus enim adipisci magnam, nisi autem dolor a ipsam sit perferendis porro! Commodi impedit repellendus expedita alias libero. Suscipit, facere doloremque?
      </p>
      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi error, placeat recusandae eum ratione officia tempora illum? Illo placeat in, tempore quam accusantium pariatur eius voluptatibus eum voluptatum porro minus molestias cupiditate asperiores cum facere repellat aut voluptatem odio recusandae omnis ipsam. Minima, harum. Molestiae obcaecati blanditiis vero rem, odio maiores quo non accusantium laudantium cum quos voluptatum totam velit voluptatibus neque vel aliquid ex dolorum possimus cumque perspiciatis nisi ut quaerat qui. Deserunt perferendis cum provident maiores temporibus laboriosam eveniet esse, incidunt odio animi ex, nostrum neque excepturi repellendus similique. Officiis corrupti amet architecto nesciunt. Vitae odit fugiat doloribus!
      </p>
     </Box>
    </Layout>
  )
}

export default About
