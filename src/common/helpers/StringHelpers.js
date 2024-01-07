// export default function toUpperCase(inpString) {
//     return inpString.toUpperCase();
// }

const StringHelpers = {
  toUpperCase: (inp) => {
    return inp.charAt(0).toUpperCase() + inp.slice(1);
  },
};

export default StringHelpers;
