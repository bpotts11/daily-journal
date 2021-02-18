let instructor = []

export const getInstructors = () => {
    return fetch("http://localhost:8088/instructors")
        .then(response => response.json())
        .then(parsedInstructors => {
            instructor = parsedInstructors
        })
}

export const useInstructors = () => {
    return instructor.slice()
}