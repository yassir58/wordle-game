

type GlobalContext = {
    turn?: number
    setTurn?: (val:number) => void
    currentWord?: string
    setCurrentWord?: (val:string) => void
    guessState?: CharType[][]
    setGuessState?: (val:CharType[][]) => void
    indexX?:number
    indexY?:number
    setX?: (val:number) => void
    setY?: (val:number) => void
    setGameCount?: (val:number) => void
    gameCount?: number,
}

type CharType = {
    char:string
    status: 'match' | 'partial-match' | 'no-match'
    color: string
}

type Game = {
    status: string
    solution: string
    tryNumber: number
    
}


type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    profileImage: string | null;
    createAt: string;
    updateAt: string;
}


type KeyboardContext = {
    modalVisible?: boolean
    setModalVisible?: (value:boolean) => void
}
type Invite = {
id       :string
solution :string
ownerId  :string
senderId :string
senderName: string
}