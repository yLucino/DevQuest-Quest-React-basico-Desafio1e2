import './home-style.css';
import './home-responsive.css';
import Paragraph from '../../partials/paragraph/paragraph';

function Home() {
  return(
    <div className='box-paragraphs'>
      <Paragraph color="#901060" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!"/>
      <Paragraph color="#009099" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!"/>
    </div>
  );
}

export default Home;