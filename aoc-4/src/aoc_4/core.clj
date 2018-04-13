(ns aoc-4.core
  (:require [clojure.math.combinatorics :as combinatorics]
            [clojure.string :as str]
            [aoc-4.anagram :refer [is-anagram?]]))

(declare are-anagrams? combinations count-valid-passphrases valid-passphrase? words)

(defn -main
  "Reads a file and outputs the number of valid passphrases"
  [filename]
  (let [passphrases (str/split (slurp filename) #"\n")]
    (println "valid: " (count-valid-passphrases passphrases))))

(defn count-valid-passphrases
  "returns the number of passphrases that are valid"
  [passphrases]
  (count (filter valid-passphrase? passphrases)))

(defn valid-passphrase?
  "returns true when none of the words in a passphrase are repeats"
  [passphrase]
  (not-any? are-anagrams? (combinations (words passphrase))))

(defn- are-anagrams?
  "takes a two element list and returns true if they are anagrams"
  [[str1 str2]]
  (is-anagram? str1 str2))

(defn- combinations
  "returns all combinations of 2 elements of the list"
  [col]
  (combinatorics/combinations col 2))

(defn- words
  "takes a string and returns a list of the whitespace delimited words "
  [str]
  (str/split str #"\s"))
