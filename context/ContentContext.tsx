"use client";

import { DEFAULT_AGENCY_CONTENT } from "@/data/constants";
import { AgencyContent } from "@/types/agency";
import { createContext, useContext } from "react";

interface ContentContextValue {
    content: AgencyContent;
}

const ContentContext = createContext<ContentContextValue>({
    content: DEFAULT_AGENCY_CONTENT,
});

export function ContentProvider({ children }: { children: React.ReactNode }) {
    return (
        <ContentContext.Provider value={{ content: DEFAULT_AGENCY_CONTENT }}>
            {children}
        </ContentContext.Provider>
    );
}

export function useAgencyContent() {
    return useContext(ContentContext);
}