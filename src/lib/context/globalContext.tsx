'use client'
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const globalContext = createContext<GlobalContext> ({})



interface props {
    children : React.ReactNode
}



  