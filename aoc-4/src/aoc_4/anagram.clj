(ns aoc-4.anagram
  (:require [clojure.math.combinatorics :as combinatorics]
            [clojure.string :as str]))

(declare contains-string? is-anagram? permutations)


(defn is-anagram?
  "Returns true if the arguments are anagrams"
  [str1 str2]
  (contains-string? str1 (permutations str2)))

(defn permutations
  "Return all the permutations of a string"
  [str]
  (map str/join (combinatorics/permutations str)))

(defn- contains-string?
  "Returns true if the string is present in the collection, false otherwise"
  [str col]
  (some? (some #{str} col)))
