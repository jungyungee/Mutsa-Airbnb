import { styled } from 'styled-components';

function MyComponent(props){
    return(
        <Box>
            <img className="picture" src={props.image} />
            <div className='title'>
                <div className='country'>{props.country}</div>
                <div className='star'>{props.star}★</div>
            </div>
            <div className='distance'>{props.distance}</div>
            <div className='days'>{props.days}</div>
            <div className='price'>₩{props.price} /박</div>
        </Box>
    );
}

const Box = styled.div`
    padding: 10px;
    width: 300px;
    .picture{
        object-fit: cover;
        width: 200px;
        height: 200px;
        border-radius: 25px;
    }
    .title{
        justify-content: space-between;
        display: flex;
    }
    .country{
        font-weight: bold;
    }
    .star{
        font-size: 15px;
    }
    `;

export default MyComponent;