'use strict'
/*
21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// -----MY CODE-----

// class to make a dummy node
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var mergeTwoLists = function(list1, list2) {
    // make a dummy node to easily grab first node of the sorted list to return
    let dummyNode = new ListNode(-1);
    let temp = dummyNode;

    // set two pointers to the beginning values of each linked list
    let curr1 = list1;
    let curr2 = list2;

    while (curr1 !== null && curr2 !== null) {
        // set the temp.next value as the lowest remaining value of the two lists
        if (curr1.value < curr2.value) {
            temp.next = curr1;
            curr1 = curr1.next;
        } else {
            temp.next = curr2;
            curr2 = curr2.next;
        }
        // stet the temp value to that value
        temp = temp.next;
    }

    // add the rest of the nodes from the list that is not finished
    temp.next = curr1 !== null ? curr1: curr2;

    return dummyNode.next;
};