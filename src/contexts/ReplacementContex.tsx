// import { createContext, ReactNode, useState } from 'react';
// import React = require('react');

// interface Replacements {
//   km_input: string;
// }

// interface ReplacementsContextType {
//   replacements: Replacements;
//   setReplacements: React.Dispatch<React.SetStateAction<number>>;
// }

// export const ReplacementsContext = createContext({} as ReplacementsContextType);

// export function ReplacementsContextProvider({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   const [replacements, setReplacements] = useState<Replacements>({
//     km_input: '',
//   });

//   return (
//     <ReplacementsContext.Provider value={{ replacements, setReplacements }}>
//       {children}
//     </ReplacementsContext.Provider>
//   );
// }
