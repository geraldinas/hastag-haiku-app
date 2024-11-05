import {syllable} from 'syllable'
// 3 lines: 
// 5 syllables in first line
// 7 in the second
// and 5 in thethird

export default function syllabize(text) {
  return syllable(text);
}
