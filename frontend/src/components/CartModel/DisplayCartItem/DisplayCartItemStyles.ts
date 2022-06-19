import styled from 'styled-components';

export const DisplayCartItemStyles = styled.div`
    .cartitem {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 20px;
        margin-bottom: 20px;
    }
    
    .cartItemImg {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        object-fit: cover;
      }
      
      .cartItemDetail {
        display: flex;
        flex: 1;
        padding: 20px;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
      }
`
