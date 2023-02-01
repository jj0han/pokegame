class Skills {
    thunderShock = {
        name: "Thunder Shock",
        type: "eletric",
        use() {
            return -10
        },
    }

    ironTail = {
        name: "Iron Tail",
        type: "steel",
        use() {
            return -12
        },
    }

    amber = {
        name: "Amber",
        type: "fire",
        use() {
            return -11
        },
    }

    scratch = {
        name: "Scratch",
        type: "normal",
        use() {
            return -7
        }
    }

    tackle = {
        name: "Tackle",
        type: "normal",
        use() {
            return -8
        }
    }

    quickAttack = {
        name: "Quick Attack",
        type: "normal",
        use() {
            return -6
        }
    }

    auraSphere = {
        name: "Aura Sphere",
        type: "figther",
        use() {
            return -17
        }
    }

    metalClaw = {
        name: "Metal Claw",
        type: "steel",
        use() {
            return -15
        }
    }

    feint = {
        name: "Feint",
        type: "Normal",
        use() {
            return -13
        }
    }
}

export { Skills }