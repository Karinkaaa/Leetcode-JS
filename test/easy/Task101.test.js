const { isSymmetric, TreeNode } = require("../../src/easy/Task101");

test("Check whether the [1, 2, 2, 3, 4, 4, 3] is a mirror of itself (i.e., symmetric around its center)", () => {
    const root = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)));
    expect(isSymmetric(root)).toBe(true);
});

test("Check whether the [1, 2, 2, null, 3, null, 3] is a mirror of itself (i.e., symmetric around its center)", () => {
    const root = new TreeNode(1, new TreeNode(2, null, new TreeNode(3)), new TreeNode(2, null, new TreeNode(3)));
    expect(isSymmetric(root)).toBe(false);
});

test("Check whether the [1, 0] is a mirror of itself (i.e., symmetric around its center)", () => {
    const root = new TreeNode(1, new TreeNode(0));
    expect(isSymmetric(root)).toBe(false);
});

test("Check whether the [1] is a mirror of itself (i.e., symmetric around its center)", () => {
    const root = new TreeNode(1);
    expect(isSymmetric(root)).toBe(true);
});