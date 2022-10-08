import styled from "styled-components";

/**
 * Layout
 *  MH = Main Header
 * AS = AsIDE
 * CT: content
 */


export const StGrid = styled.section`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;

    grid-template-areas: 
    'AS MH'
    'AS CT';
`