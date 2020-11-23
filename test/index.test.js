const { greet } = require("../app/index")

test('test requirement 1', () => {
    expect(greet("Sonter")).toBe("Hello, Sonter")
});

test('test requirement 2', () => {
    expect(greet(null)).toBe("Hello, my friend.")
});

test('test requirement 3', () => {
     expect(greet("JERRY")).toBe("HELLO JERRY!")
});

test('test requirement 4', () => {
    expect(greet(["Jill","Jane"])).toBe("Hello, Jill and Jane.")
});

test('test requirement 5', () => {
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.")
})

test('test requirement 6', () => {
    expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!")
})
test('test requirement 7', () => {
    expect(greet(["Bob", "Charlie, Dianne"])).toBe("Hello, Bob, Charlie, and Dianne.")
})
test('test requirement 8', () => {
    expect(greet(["Bob", '"Charlie, Dianne"'])).toBe("Hello, Bob and Charlie, Dianne.")
})

