import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
     font-size: 16px;
     width: 100%;
     margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display:flex;
    margin: 0;
`;

WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 16px;
    user-select: none;
    cursor: pointer;
    z-index: 99999;
    background-color: #D2691E;
    margin: 8px;
    color: #FFF;

    &:focus{
        outline: none;
    }

    &.is-selected {
        box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.5);
        background-color: #CD853F;
    }
`;


export const WrapperTabPanel = styled(TabPanel)`
    padding: 16px;
    border: 1px solid #ccc;
    display: none;
    margin-top: -5px;
   
   margin-top: -5px;
   
   &.is-selected{
    display: block;

   }

`;

export const WrapperList = styled.div`
    display:flex;
    justify-content: flex-start;
    flex-wrap: wrap;

`;

