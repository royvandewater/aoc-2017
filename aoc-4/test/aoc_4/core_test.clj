(ns aoc-4.core-test
  (:require [clojure.test :refer :all]
            [aoc-4.core :refer :all]))

(deftest test-valid-passphrase?
  (testing "given a valid passphrase"
    (is (true? (valid-passphrase? "aa bb cc"))))

  (testing "given an invalid passphrase due to a repeat"
    (is (false? (valid-passphrase? "aa aa cc"))))

  (testing "given an invalid passphrase due to an anagram"
    (is (false? (valid-passphrase? "ab ba cc")))))

(deftest test-count-valid-passphrases
  (testing "given two valid passphrases"
    (is (= 2 (count-valid-passphrases ["aa bb cc" "aa bb cc"]))))

  (testing "given one valid and one invalid passphrase"
    (is (= 1 (count-valid-passphrases ["aa bb cc" "aa aa cc"])))))
