(ns aoc-4.anagram-test
  (:require [clojure.test :refer :all]
            [aoc-4.anagram :refer :all]))

(deftest test-is-anagram?
  (testing "given an anagram"
    (is (true? (is-anagram? "abc" "cba"))))

  (testing "given a non anagram"
    (is (false? (is-anagram? "abc" "def")))))

(deftest test-permutations
  (testing "given a string"
    (is (= '("ab" "ba") (permutations "ab")))))
