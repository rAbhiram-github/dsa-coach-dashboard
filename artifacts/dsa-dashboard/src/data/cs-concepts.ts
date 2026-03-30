export type CSCategory = "OOPs" | "DBMS" | "OS" | "CN" | "DSA";

export interface CSQuestion {
  id: number;
  question: string;
  category: CSCategory;
  answer: string;
  keyPoints: string[];
  example?: string;
}

export const csCategories: { title: CSCategory; icon: string; color: string; description: string }[] = [
  { title: "OOPs", icon: "🧱", color: "from-violet-500 to-purple-600", description: "Object Oriented Programming" },
  { title: "DBMS", icon: "🗄️", color: "from-emerald-500 to-teal-600", description: "Database Management Systems" },
  { title: "OS", icon: "🖥️", color: "from-orange-500 to-red-600", description: "Operating Systems" },
  { title: "CN", icon: "🌐", color: "from-blue-500 to-cyan-600", description: "Computer Networks" },
  { title: "DSA", icon: "📊", color: "from-pink-500 to-rose-600", description: "Data Structures & Algorithms" },
];

export const csQuestions: CSQuestion[] = [
  // ===== OOPs =====
  {
    id: 1, category: "OOPs",
    question: "What is Object-Oriented Programming (OOP)?",
    answer: "OOP is a programming paradigm based on the concept of 'objects' which contain data (attributes/properties) and code (methods/functions). Instead of writing a long list of instructions, you organize your program around objects that model real-world entities. For example, a 'Car' object might have properties like color and speed, and methods like accelerate() and brake(). OOP makes code reusable, modular, and easier to maintain.",
    keyPoints: ["Organizes code around objects", "Objects have properties (data) and methods (behavior)", "Makes code reusable and modular", "Models real-world entities"],
    example: "class Car:\n    def __init__(self, color, speed):\n        self.color = color\n        self.speed = speed\n    def accelerate(self):\n        self.speed += 10"
  },
  {
    id: 2, category: "OOPs",
    question: "What are the 4 pillars of OOP?",
    answer: "The 4 pillars are: 1) Encapsulation — bundling data and methods together and hiding internal details (like a TV remote — you press buttons without knowing internal circuits). 2) Abstraction — showing only essential features and hiding complexity (like driving a car — you use the steering wheel without knowing engine internals). 3) Inheritance — a child class inherits properties/methods from a parent class (like a child inheriting traits from parents). 4) Polymorphism — same method behaves differently based on the object (like the word 'open' — you can open a door, open a book, open an app — same action, different behavior).",
    keyPoints: ["Encapsulation: Bundle data + methods, hide internals", "Abstraction: Show only what's needed", "Inheritance: Child class gets parent's features", "Polymorphism: Same method, different behaviors"],
  },
  {
    id: 3, category: "OOPs",
    question: "What is Encapsulation? Why is it important?",
    answer: "Encapsulation means wrapping data (variables) and methods (functions) into a single unit called a class, and restricting direct access to some components. Think of it like a medicine capsule — all ingredients are packed inside, and you only interact with the outer shell. We use access modifiers (private, public, protected) to control what's visible. It's important because: it protects data from accidental modification, reduces complexity, and makes code more maintainable.",
    keyPoints: ["Wrapping data and methods in a class", "Access modifiers control visibility (private, public, protected)", "Protects data from unintended changes", "Like a capsule — internals are hidden"],
    example: "class BankAccount:\n    def __init__(self):\n        self.__balance = 0  # private\n    def deposit(self, amount):\n        if amount > 0:\n            self.__balance += amount\n    def get_balance(self):\n        return self.__balance"
  },
  {
    id: 4, category: "OOPs",
    question: "What is Inheritance? What are its types?",
    answer: "Inheritance allows a new class (child/derived) to inherit properties and methods from an existing class (parent/base). It promotes code reuse — you don't rewrite common code. Types: 1) Single — one child, one parent. 2) Multilevel — A → B → C (chain). 3) Hierarchical — one parent, multiple children. 4) Multiple — one child, multiple parents (supported in Python/C++, not Java). 5) Hybrid — combination of above types.",
    keyPoints: ["Child class inherits from parent class", "Promotes code reuse", "Types: Single, Multilevel, Hierarchical, Multiple, Hybrid", "Java doesn't support multiple inheritance with classes (uses interfaces instead)"],
    example: "class Animal:\n    def speak(self): pass\n\nclass Dog(Animal):\n    def speak(self): return 'Bark!'\n\nclass Cat(Animal):\n    def speak(self): return 'Meow!'"
  },
  {
    id: 5, category: "OOPs",
    question: "What is Polymorphism? Explain its types.",
    answer: "Polymorphism means 'many forms'. The same method name can behave differently depending on the object or parameters. Two types: 1) Compile-time (Static) — achieved through method overloading (same method name, different parameters). Decided at compile time. 2) Runtime (Dynamic) — achieved through method overriding (child class redefines parent's method). Decided at runtime. Example: A 'draw()' method draws a circle for Circle object and a rectangle for Rectangle object.",
    keyPoints: ["Poly = many, morph = forms", "Compile-time: Method Overloading (same name, different params)", "Runtime: Method Overriding (child redefines parent method)", "Enables flexibility and extensibility"],
  },
  {
    id: 6, category: "OOPs",
    question: "What is Abstraction? How is it different from Encapsulation?",
    answer: "Abstraction means hiding complex implementation details and showing only the necessary features. Think of an ATM — you insert a card and get money without knowing the internal banking processes. It's achieved using abstract classes and interfaces. Difference from Encapsulation: Abstraction focuses on WHAT an object does (hiding complexity), while Encapsulation focuses on HOW it's done (hiding data). Abstraction is about design level, Encapsulation is about implementation level.",
    keyPoints: ["Hides complexity, shows only essentials", "Achieved via abstract classes and interfaces", "Abstraction = hiding complexity (design level)", "Encapsulation = hiding data (implementation level)"],
  },
  {
    id: 7, category: "OOPs",
    question: "What is the difference between a Class and an Object?",
    answer: "A Class is a blueprint or template — it defines what properties and methods an object will have. An Object is an actual instance created from that blueprint. Think of it like: Class = Recipe for a cake, Object = The actual cake made from that recipe. You can make many cakes (objects) from one recipe (class). A class occupies no memory until objects are created from it.",
    keyPoints: ["Class = Blueprint/Template", "Object = Instance of a class", "Class defines structure, Object holds actual data", "Many objects can be created from one class"],
  },
  {
    id: 8, category: "OOPs",
    question: "What is a Constructor? What are its types?",
    answer: "A constructor is a special method that is automatically called when an object is created. It's used to initialize the object's properties. It has the same name as the class (in Java/C++) or __init__ in Python. Types: 1) Default Constructor — no parameters, sets default values. 2) Parameterized Constructor — takes arguments to initialize with specific values. 3) Copy Constructor — creates a new object as a copy of an existing object.",
    keyPoints: ["Special method called during object creation", "Used to initialize object properties", "Types: Default, Parameterized, Copy", "Cannot have a return type"],
    example: "class Student:\n    def __init__(self, name='Unknown', age=0):\n        self.name = name\n        self.age = age\n\ns1 = Student()           # Default\ns2 = Student('John', 20) # Parameterized"
  },
  {
    id: 9, category: "OOPs",
    question: "What is Method Overloading vs Method Overriding?",
    answer: "Method Overloading: Same method name but different number/type of parameters in the SAME class. Resolved at compile time. Example: add(int a, int b) and add(int a, int b, int c). Method Overriding: Same method name and parameters in PARENT and CHILD class. The child provides its own implementation. Resolved at runtime. The child's version replaces the parent's version when called on a child object.",
    keyPoints: ["Overloading: Same name, different params, same class, compile-time", "Overriding: Same name, same params, parent-child, runtime", "Overloading = compile-time polymorphism", "Overriding = runtime polymorphism"],
  },
  {
    id: 10, category: "OOPs",
    question: "What are Access Modifiers?",
    answer: "Access modifiers control the visibility/accessibility of classes, methods, and variables. 1) Public — accessible from anywhere. 2) Private — accessible only within the same class. 3) Protected — accessible within the same class and subclasses. 4) Default (Java) / Internal — accessible within the same package/module. They enforce encapsulation by restricting unauthorized access to sensitive data.",
    keyPoints: ["Public: Accessible everywhere", "Private: Only within the same class", "Protected: Same class + subclasses", "Default: Same package/module"],
  },
  {
    id: 11, category: "OOPs",
    question: "What is an Abstract Class vs an Interface?",
    answer: "Abstract Class: Can have both abstract (no body) and concrete (with body) methods. Can have constructors and instance variables. A class can extend only ONE abstract class. Interface: All methods are abstract (before Java 8). Cannot have constructors. A class can implement MULTIPLE interfaces. Use abstract class when classes share common behavior. Use interface to define a contract that unrelated classes can implement.",
    keyPoints: ["Abstract class: mix of abstract + concrete methods, single inheritance", "Interface: only abstract methods (traditionally), multiple inheritance", "Abstract class = 'is-a' relationship", "Interface = 'can-do' capability"],
  },
  {
    id: 12, category: "OOPs",
    question: "What is the 'this' and 'super' keyword?",
    answer: "'this' refers to the current object instance. It's used to: distinguish between instance variables and parameters with the same name, call other constructors in the same class, and pass the current object as an argument. 'super' refers to the parent class. It's used to: call the parent's constructor, access parent's methods/variables that are overridden in the child class.",
    keyPoints: ["this = current object reference", "super = parent class reference", "this() calls current class constructor", "super() calls parent class constructor"],
  },

  // ===== DBMS =====
  {
    id: 13, category: "DBMS",
    question: "What is DBMS? What are its advantages over file systems?",
    answer: "DBMS (Database Management System) is software that stores, manages, and retrieves data efficiently. Unlike flat file systems, DBMS provides: 1) Reduced data redundancy — no duplicate data scattered in files. 2) Data consistency — changes reflect everywhere. 3) Data security — access control with permissions. 4) ACID properties for transactions. 5) Concurrent access — multiple users can work simultaneously. 6) Backup and recovery mechanisms. Examples: MySQL, PostgreSQL, Oracle, MongoDB.",
    keyPoints: ["Software to manage databases", "Reduces redundancy and inconsistency", "Supports concurrent access", "Provides security, backup & recovery"],
  },
  {
    id: 14, category: "DBMS",
    question: "What are ACID properties?",
    answer: "ACID ensures reliable database transactions: 1) Atomicity — Transaction is all-or-nothing. If any part fails, the entire transaction rolls back. Like transferring money — both debit AND credit must happen, or neither. 2) Consistency — Database moves from one valid state to another. Rules/constraints are never violated. 3) Isolation — Concurrent transactions don't interfere with each other. Each transaction feels like it's the only one running. 4) Durability — Once committed, data persists even if the system crashes.",
    keyPoints: ["Atomicity: All or nothing", "Consistency: Valid state to valid state", "Isolation: Transactions don't interfere", "Durability: Committed data survives crashes"],
  },
  {
    id: 15, category: "DBMS",
    question: "What is Normalization? Explain the normal forms.",
    answer: "Normalization is the process of organizing data to reduce redundancy and dependency. Normal Forms: 1NF — No repeating groups; each cell has a single value. 2NF — Must be in 1NF + no partial dependency (non-key column depends on entire primary key). 3NF — Must be in 2NF + no transitive dependency (non-key column depends on another non-key column). BCNF — Stricter version of 3NF: every determinant must be a candidate key.",
    keyPoints: ["1NF: Atomic values, no repeating groups", "2NF: No partial dependency on composite key", "3NF: No transitive dependency", "BCNF: Every determinant is a candidate key"],
  },
  {
    id: 16, category: "DBMS",
    question: "What are different types of SQL Joins?",
    answer: "Joins combine rows from two or more tables based on a related column. Types: 1) INNER JOIN — Returns only matching rows from both tables. 2) LEFT JOIN — All rows from left table + matching rows from right (NULL if no match). 3) RIGHT JOIN — All rows from right table + matching rows from left. 4) FULL OUTER JOIN — All rows from both tables (NULL where no match). 5) CROSS JOIN — Every row from first table paired with every row from second (Cartesian product). 6) SELF JOIN — A table joined with itself.",
    keyPoints: ["INNER JOIN: Only matching rows", "LEFT JOIN: All left + matching right", "RIGHT JOIN: All right + matching left", "FULL OUTER: Everything from both tables"],
    example: "SELECT e.name, d.dept_name\nFROM employees e\nINNER JOIN departments d\nON e.dept_id = d.id;"
  },
  {
    id: 17, category: "DBMS",
    question: "What is the difference between Primary Key and Foreign Key?",
    answer: "Primary Key: Uniquely identifies each row in a table. Cannot be NULL. Only one per table. Example: student_id in Students table. Foreign Key: A column in one table that references the primary key of another table. Creates a relationship between tables. Can be NULL. Multiple foreign keys allowed. Example: dept_id in Students table referencing id in Departments table. Together, they maintain referential integrity.",
    keyPoints: ["Primary Key: Unique + NOT NULL, one per table", "Foreign Key: References another table's primary key", "FK creates relationships between tables", "Together they ensure referential integrity"],
  },
  {
    id: 18, category: "DBMS",
    question: "What is Indexing? What are its types?",
    answer: "An index is a data structure that speeds up data retrieval (like a book's index helps you find topics quickly). Without an index, the DB scans every row (full table scan). Types: 1) Primary Index — on the primary key, automatically created. 2) Secondary Index — on non-key columns. 3) Clustered Index — physically reorders the table data (only one per table). 4) Non-clustered Index — separate structure pointing to data (multiple allowed). 5) Composite Index — on multiple columns.",
    keyPoints: ["Speeds up SELECT queries", "Trade-off: faster reads, slower writes", "Clustered: physically reorders data (one per table)", "Non-clustered: separate lookup structure (multiple allowed)"],
  },
  {
    id: 19, category: "DBMS",
    question: "What is a Transaction? What are its states?",
    answer: "A transaction is a logical unit of work that consists of one or more SQL operations. It follows ACID properties. States: 1) Active — transaction is being executed. 2) Partially Committed — all operations done, waiting for final commit. 3) Committed — changes are permanent. 4) Failed — an error occurred during execution. 5) Aborted — transaction is rolled back, database restored to previous state. A transaction moves through these states during its lifecycle.",
    keyPoints: ["Logical unit of work (one or more operations)", "States: Active → Partially Committed → Committed", "Can also go: Active → Failed → Aborted", "Follows ACID properties"],
  },
  {
    id: 20, category: "DBMS",
    question: "What is the difference between DELETE, TRUNCATE, and DROP?",
    answer: "DELETE: Removes specific rows based on a WHERE condition. Can be rolled back (logged). Slower because it logs each row deletion. Triggers fire. TRUNCATE: Removes ALL rows from a table but keeps the structure. Faster because it deallocates pages. Cannot use WHERE. Generally cannot be rolled back. DROP: Completely removes the table — structure, data, indexes, everything. The table ceases to exist. Cannot be rolled back.",
    keyPoints: ["DELETE: Row-by-row, can rollback, uses WHERE", "TRUNCATE: Removes all rows, keeps structure, faster", "DROP: Removes entire table and structure", "DELETE fires triggers, TRUNCATE doesn't"],
  },
  {
    id: 21, category: "DBMS",
    question: "What is a Deadlock in DBMS? How to prevent it?",
    answer: "A deadlock occurs when two or more transactions are waiting for each other to release locks, creating a circular wait — none can proceed. Example: T1 locks Table A, waits for Table B. T2 locks Table B, waits for Table A. Prevention: 1) Lock ordering — always acquire locks in the same order. 2) Timeout — abort transaction if it waits too long. 3) Wait-Die / Wound-Wait schemes using timestamps. 4) Deadlock detection — periodically check for cycles in the wait-for graph.",
    keyPoints: ["Circular wait between transactions", "None can proceed — system is stuck", "Prevention: Lock ordering, timeouts, timestamps", "Detection: Wait-for graph cycle detection"],
  },
  {
    id: 22, category: "DBMS",
    question: "What is the difference between SQL and NoSQL?",
    answer: "SQL databases are relational — data stored in structured tables with fixed schemas. They use SQL for querying and support ACID. Examples: MySQL, PostgreSQL. NoSQL databases are non-relational — flexible schemas, data stored as documents, key-value pairs, graphs, or columns. They prioritize scalability and performance. Follow BASE (Basically Available, Soft state, Eventually consistent). Examples: MongoDB, Redis, Cassandra. Choose SQL for complex queries and consistency. Choose NoSQL for scalability and flexible data.",
    keyPoints: ["SQL: Structured, fixed schema, ACID, tables", "NoSQL: Flexible schema, BASE, various data models", "SQL: Good for complex joins and consistency", "NoSQL: Good for scalability and unstructured data"],
  },
  {
    id: 23, category: "DBMS",
    question: "What are Views in SQL?",
    answer: "A View is a virtual table based on the result of a SQL query. It doesn't store data physically — it's just a saved query that acts like a table. Benefits: 1) Simplifies complex queries — write once, reuse. 2) Security — restrict access to specific columns/rows. 3) Data abstraction — hide underlying table structure. 4) Logical data independence. A materialized view actually stores the result and refreshes periodically for better performance.",
    keyPoints: ["Virtual table from a saved query", "Doesn't store data (except materialized views)", "Simplifies complex queries", "Provides security by limiting column access"],
    example: "CREATE VIEW active_students AS\nSELECT name, age, gpa\nFROM students\nWHERE status = 'active';"
  },
  {
    id: 24, category: "DBMS",
    question: "What is Denormalization and when would you use it?",
    answer: "Denormalization is the intentional introduction of redundancy into a normalized database to improve read performance. While normalization reduces redundancy, too much normalization can lead to many joins which slow down queries. Use denormalization when: 1) Read-heavy applications (reporting, analytics). 2) Joins are too expensive. 3) Performance is more critical than storage. Trade-off: Faster reads but slower writes, more storage, risk of data inconsistency.",
    keyPoints: ["Adding redundancy to improve read performance", "Opposite of normalization", "Use for read-heavy workloads", "Trade-off: speed vs storage and consistency"],
  },

  // ===== OS =====
  {
    id: 25, category: "OS",
    question: "What is an Operating System? What are its functions?",
    answer: "An Operating System (OS) is system software that manages computer hardware, software resources, and provides common services. It acts as an intermediary between the user and hardware. Key functions: 1) Process Management — creating, scheduling, terminating processes. 2) Memory Management — allocating/deallocating RAM. 3) File System Management — organizing and storing files. 4) I/O Management — handling input/output devices. 5) Security — authentication and access control. 6) Networking — managing network connections.",
    keyPoints: ["Intermediary between user and hardware", "Manages processes, memory, files, I/O", "Provides security and networking", "Examples: Windows, Linux, macOS"],
  },
  {
    id: 26, category: "OS",
    question: "What is a Process vs a Thread?",
    answer: "A Process is a program in execution — it has its own memory space, code, data, and resources. A Thread is the smallest unit of execution within a process — threads share the process's memory and resources. Analogy: A process is like a factory (has its own building, resources). Threads are workers inside the factory (share the building but do different tasks). Creating a new process is expensive (own memory). Creating a thread is cheap (shares memory). Processes are isolated; threads can communicate easily but need synchronization.",
    keyPoints: ["Process: Independent, own memory, heavyweight", "Thread: Shares process memory, lightweight", "Inter-thread communication is easier than inter-process", "Threads need synchronization (risk of race conditions)"],
  },
  {
    id: 27, category: "OS",
    question: "What is a Deadlock? What are the necessary conditions?",
    answer: "A deadlock is a situation where two or more processes are blocked forever, each waiting for a resource held by another. 4 necessary conditions (ALL must hold): 1) Mutual Exclusion — resource can be held by only one process. 2) Hold and Wait — process holds resources while waiting for more. 3) No Preemption — resources cannot be forcibly taken. 4) Circular Wait — circular chain of processes waiting for each other. Break any one condition to prevent deadlock.",
    keyPoints: ["All 4 conditions must hold simultaneously", "Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait", "Prevention: Break any one condition", "Detection: Resource allocation graph"],
  },
  {
    id: 28, category: "OS",
    question: "What are CPU Scheduling Algorithms?",
    answer: "CPU scheduling decides which process gets the CPU next. Types: 1) FCFS (First Come First Served) — simple queue, non-preemptive. Problem: convoy effect. 2) SJF (Shortest Job First) — shortest burst time first. Optimal for avg wait time but hard to predict burst. 3) Round Robin — each process gets a fixed time quantum, then goes to the back. Good for time-sharing. 4) Priority Scheduling — highest priority first. Problem: starvation (solved by aging). 5) Multilevel Queue — multiple queues with different algorithms.",
    keyPoints: ["FCFS: Simple but can cause convoy effect", "SJF: Optimal average wait time", "Round Robin: Fair, uses time quantum", "Priority: May cause starvation (fix with aging)"],
  },
  {
    id: 29, category: "OS",
    question: "What is Virtual Memory?",
    answer: "Virtual memory is a technique that gives each process the illusion of having a large, contiguous memory space, even if physical RAM is limited. It uses disk space (swap/page file) as an extension of RAM. How it works: Memory is divided into fixed-size pages (logical) and frames (physical). When a page is needed but not in RAM, a page fault occurs, and it's loaded from disk. Benefits: Run programs larger than physical RAM, better memory isolation, efficient memory utilization.",
    keyPoints: ["Illusion of large memory using disk + RAM", "Uses paging: logical pages ↔ physical frames", "Page fault: needed page not in RAM, loaded from disk", "Enables running programs larger than physical RAM"],
  },
  {
    id: 30, category: "OS",
    question: "What is Paging vs Segmentation?",
    answer: "Paging: Divides memory into fixed-size blocks (pages and frames). Simple to implement, no external fragmentation, but may have internal fragmentation (wasted space within a page). Segmentation: Divides memory into variable-size segments based on logical divisions (code, data, stack). No internal fragmentation, but can have external fragmentation. Segments have meaning (the code segment, data segment), while pages are just fixed chunks. Modern systems often use a combination of both.",
    keyPoints: ["Paging: Fixed-size blocks, internal fragmentation", "Segmentation: Variable-size, external fragmentation", "Paging is simpler to manage", "Segmentation maps to logical program structure"],
  },
  {
    id: 31, category: "OS",
    question: "What is a Semaphore vs a Mutex?",
    answer: "Both are synchronization tools to prevent race conditions. Mutex (Mutual Exclusion): A lock that only one thread can hold at a time. Only the thread that locked it can unlock it. Binary — locked or unlocked. Analogy: A key to a single bathroom. Semaphore: A counter that allows N threads to access a resource simultaneously. Can be binary (like mutex) or counting (allows N concurrent accesses). Any thread can signal it. Analogy: A parking lot with N spots.",
    keyPoints: ["Mutex: Binary lock, owned by one thread", "Semaphore: Counter, allows N concurrent accesses", "Mutex = single key, Semaphore = parking lot with N spots", "Mutex has ownership, Semaphore doesn't"],
  },
  {
    id: 32, category: "OS",
    question: "What are Page Replacement Algorithms?",
    answer: "When RAM is full and a new page is needed, one existing page must be replaced. Algorithms: 1) FIFO (First In First Out) — replace the oldest page. Simple but can cause Belady's anomaly. 2) LRU (Least Recently Used) — replace the page not used for the longest time. Good performance. 3) Optimal — replace the page that won't be used for the longest future time. Best but impractical (needs future knowledge). 4) LFU (Least Frequently Used) — replace the least accessed page.",
    keyPoints: ["FIFO: Simple, may cause Belady's anomaly", "LRU: Good performance, replace least recently used", "Optimal: Best but needs future knowledge", "Goal: Minimize page faults"],
  },
  {
    id: 33, category: "OS",
    question: "What is the difference between User Mode and Kernel Mode?",
    answer: "User Mode: Limited access. Applications run here. Cannot directly access hardware or critical system resources. If a program crashes, only that program is affected. Kernel Mode: Full access to hardware and all system resources. The OS kernel runs here. A crash can bring down the entire system. System calls are the mechanism for user-mode programs to request kernel-mode services. The CPU switches between these modes using a mode bit (0 = kernel, 1 = user).",
    keyPoints: ["User Mode: Restricted, safe, application space", "Kernel Mode: Full access, OS core operations", "System calls bridge user mode ↔ kernel mode", "Mode bit in CPU controls the current mode"],
  },
  {
    id: 34, category: "OS",
    question: "What is Thrashing?",
    answer: "Thrashing occurs when a system spends more time swapping pages in and out of memory than executing actual processes. It happens when there are too many processes competing for too little RAM. The CPU utilization drops drastically because it's constantly handling page faults. Solutions: 1) Reduce the degree of multiprogramming (fewer processes). 2) Use Working Set Model — keep track of each process's active pages. 3) Add more RAM. 4) Use better page replacement algorithms.",
    keyPoints: ["System spends more time on page faults than execution", "CPU utilization drops drastically", "Caused by too many processes, too little RAM", "Fix: Reduce processes, add RAM, working set model"],
  },
  {
    id: 35, category: "OS",
    question: "What is a System Call? Give examples.",
    answer: "A system call is the interface between a user-mode program and the OS kernel. When a program needs to perform a privileged operation (file I/O, process creation, memory allocation), it makes a system call. The CPU switches from user mode to kernel mode to execute it. Examples: fork() — create a new process. open()/read()/write()/close() — file operations. exec() — replace process with a new program. wait() — wait for child process. malloc() internally uses brk()/mmap() system calls.",
    keyPoints: ["Interface between user programs and OS kernel", "Triggers switch from user mode to kernel mode", "Categories: Process, File, Device, Information, Communication", "Examples: fork(), open(), read(), write(), exec()"],
  },
  {
    id: 36, category: "OS",
    question: "What is the difference between Preemptive and Non-Preemptive Scheduling?",
    answer: "Preemptive Scheduling: The OS can forcibly take the CPU away from a running process (e.g., when a higher-priority process arrives or time quantum expires). Better for time-sharing systems. Examples: Round Robin, SRTF, Priority (preemptive). Non-Preemptive: Once a process gets the CPU, it keeps it until it finishes or voluntarily gives it up (I/O or completion). Simpler but can cause starvation. Examples: FCFS, SJF (non-preemptive).",
    keyPoints: ["Preemptive: OS can interrupt running process", "Non-Preemptive: Process runs until done or blocked", "Preemptive = better responsiveness", "Non-Preemptive = simpler, less overhead"],
  },

  // ===== CN =====
  {
    id: 37, category: "CN",
    question: "What is the OSI Model? Explain all 7 layers.",
    answer: "The OSI (Open Systems Interconnection) model is a 7-layer conceptual framework for network communication. From bottom to top: 1) Physical — bits over cables/signals (hubs, cables). 2) Data Link — frames, MAC addresses, error detection (switches). 3) Network — packets, IP addressing, routing (routers). 4) Transport — segments, TCP/UDP, reliable delivery, ports. 5) Session — manages sessions/connections between apps. 6) Presentation — data formatting, encryption, compression. 7) Application — HTTP, FTP, SMTP — user-facing protocols. Remember: 'Please Do Not Throw Sausage Pizza Away'.",
    keyPoints: ["7 layers from Physical to Application", "Physical: Bits, Data Link: Frames, Network: Packets", "Transport: Segments, Session: Connections", "Presentation: Formatting, Application: User protocols"],
  },
  {
    id: 38, category: "CN",
    question: "What is the difference between TCP and UDP?",
    answer: "TCP (Transmission Control Protocol): Connection-oriented — establishes connection before sending data (3-way handshake). Reliable — guarantees delivery with acknowledgments and retransmissions. Ordered delivery. Slower due to overhead. Used for: web browsing (HTTP), email (SMTP), file transfer (FTP). UDP (User Datagram Protocol): Connectionless — sends without establishing connection. Unreliable — no guarantee of delivery. Faster, less overhead. Used for: video streaming, online gaming, DNS, VoIP.",
    keyPoints: ["TCP: Reliable, ordered, connection-oriented, slower", "UDP: Unreliable, unordered, connectionless, faster", "TCP: HTTP, FTP, email", "UDP: Streaming, gaming, DNS"],
  },
  {
    id: 39, category: "CN",
    question: "What is the TCP 3-Way Handshake?",
    answer: "The 3-way handshake establishes a TCP connection between client and server. Step 1 (SYN): Client sends a SYN (synchronize) packet to the server, saying 'I want to connect'. Step 2 (SYN-ACK): Server responds with SYN-ACK, saying 'I received your request, and I'm ready'. Step 3 (ACK): Client sends ACK, saying 'Got it, let's start'. Now the connection is established and data can flow both ways. Connection termination uses a 4-way handshake (FIN, ACK, FIN, ACK).",
    keyPoints: ["SYN → SYN-ACK → ACK", "Establishes reliable connection before data transfer", "Both sides synchronize sequence numbers", "Termination uses 4-way: FIN → ACK → FIN → ACK"],
  },
  {
    id: 40, category: "CN",
    question: "What is the difference between IPv4 and IPv6?",
    answer: "IPv4: 32-bit address (4 octets), ~4.3 billion addresses. Format: 192.168.1.1. Running out of addresses. Uses NAT for address reuse. Supports broadcast. IPv6: 128-bit address, virtually unlimited addresses (340 undecillion). Format: 2001:0db8:85a3::8a2e:0370:7334. Built-in security (IPsec). No NAT needed. No broadcast — uses multicast/anycast instead. Simpler header for faster processing. IPv6 is the future, but IPv4 is still widely used (coexistence via tunneling, dual-stack).",
    keyPoints: ["IPv4: 32-bit, 4.3 billion addresses, running out", "IPv6: 128-bit, virtually unlimited addresses", "IPv6 has built-in security (IPsec)", "Transition: Dual-stack, tunneling"],
  },
  {
    id: 41, category: "CN",
    question: "What is DNS? How does it work?",
    answer: "DNS (Domain Name System) translates human-readable domain names (google.com) into IP addresses (142.250.190.46). It's like the internet's phone book. How it works: 1) You type google.com in browser. 2) Browser checks local cache. 3) If not found, asks Recursive DNS resolver (usually ISP's). 4) Resolver asks Root DNS server → gets directed to .com TLD server. 5) TLD server points to Google's authoritative DNS. 6) Authoritative server returns the IP address. 7) Browser connects to that IP.",
    keyPoints: ["Translates domain names to IP addresses", "Hierarchy: Root → TLD → Authoritative", "Uses caching at multiple levels for speed", "DNS uses UDP port 53 (TCP for large responses)"],
  },
  {
    id: 42, category: "CN",
    question: "What is HTTP vs HTTPS?",
    answer: "HTTP (HyperText Transfer Protocol) is the protocol for transmitting web pages. Data is sent in plain text — anyone can intercept and read it. Port 80. HTTPS (HTTP Secure) is HTTP with encryption using TLS/SSL. Data is encrypted — even if intercepted, it's unreadable. Port 443. HTTPS process: 1) Client requests secure connection. 2) Server sends its SSL certificate. 3) Client verifies certificate. 4) They negotiate encryption keys. 5) All communication is encrypted. HTTPS is now the standard — browsers mark HTTP sites as 'Not Secure'.",
    keyPoints: ["HTTP: Plain text, port 80, insecure", "HTTPS: Encrypted with TLS/SSL, port 443", "HTTPS uses certificates for authentication", "HTTPS is now the web standard"],
  },
  {
    id: 43, category: "CN",
    question: "What is a Subnet Mask? What is Subnetting?",
    answer: "A subnet mask determines which part of an IP address is the network portion and which is the host portion. Example: IP 192.168.1.100 with mask 255.255.255.0 means network is 192.168.1.x and host is .100. Subnetting is dividing a large network into smaller sub-networks. Benefits: 1) Better security — isolate departments. 2) Reduced congestion. 3) Efficient IP usage. CIDR notation: /24 means first 24 bits are network (same as 255.255.255.0).",
    keyPoints: ["Subnet mask separates network and host portions", "Subnetting divides large networks into smaller ones", "CIDR: /24 = 255.255.255.0 = 256 addresses", "Benefits: Security, performance, efficient IP use"],
  },
  {
    id: 44, category: "CN",
    question: "What is ARP (Address Resolution Protocol)?",
    answer: "ARP maps an IP address (Layer 3) to a MAC address (Layer 2). When a device wants to send data within a local network, it knows the destination IP but needs the MAC address. Process: 1) Device broadcasts an ARP request: 'Who has IP 192.168.1.5? Tell me your MAC.' 2) The device with that IP responds: 'That's me! My MAC is AA:BB:CC:DD:EE:FF.' 3) The sender caches this mapping in its ARP table for future use. RARP does the reverse — MAC to IP.",
    keyPoints: ["Maps IP address to MAC address", "Uses broadcast to find the MAC address", "ARP table caches mappings", "RARP: Reverse ARP (MAC → IP)"],
  },
  {
    id: 45, category: "CN",
    question: "What are the differences between Hub, Switch, and Router?",
    answer: "Hub (Layer 1): A simple repeater. Receives data and broadcasts it to ALL ports. No intelligence — causes collisions and wastes bandwidth. Switch (Layer 2): Learns MAC addresses and forwards data only to the correct port. Reduces collisions, more efficient. Creates a collision domain per port. Router (Layer 3): Routes data between DIFFERENT networks using IP addresses. Makes intelligent routing decisions. Connects your home network to the internet. Has NAT, firewall capabilities.",
    keyPoints: ["Hub: Broadcasts to all, Layer 1, dumb", "Switch: Forwards to specific port, Layer 2, uses MAC", "Router: Routes between networks, Layer 3, uses IP", "Hub → Switch → Router (increasing intelligence)"],
  },
  {
    id: 46, category: "CN",
    question: "What is a Firewall?",
    answer: "A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on predefined security rules. It acts as a barrier between trusted (internal) and untrusted (external/internet) networks. Types: 1) Packet Filtering — checks packet headers (IP, port). Simple but limited. 2) Stateful Inspection — tracks connection states. 3) Application Layer — inspects packet content (deep packet inspection). 4) Next-Gen (NGFW) — combines all with intrusion detection, malware protection.",
    keyPoints: ["Filters network traffic based on rules", "Barrier between internal and external networks", "Types: Packet filtering, Stateful, Application, NGFW", "Can be hardware or software based"],
  },

  // ===== DSA =====
  {
    id: 47, category: "DSA",
    question: "What is Time Complexity? Explain Big O Notation.",
    answer: "Time complexity measures how the runtime of an algorithm grows as the input size increases. Big O notation describes the worst-case upper bound. Common complexities (fastest to slowest): O(1) — constant (hash lookup). O(log n) — logarithmic (binary search). O(n) — linear (single loop). O(n log n) — linearithmic (merge sort). O(n²) — quadratic (nested loops). O(2ⁿ) — exponential (recursion without memoization). We focus on the dominant term and drop constants: O(2n + 5) → O(n).",
    keyPoints: ["Measures algorithm efficiency as input grows", "Big O = worst case upper bound", "O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)", "Drop constants and lower-order terms"],
  },
  {
    id: 48, category: "DSA",
    question: "What is the difference between Array and Linked List?",
    answer: "Array: Contiguous memory, fixed size (in most languages), O(1) random access by index, O(n) insertion/deletion (shifting required), cache-friendly. Linked List: Non-contiguous memory, dynamic size, O(n) access (must traverse), O(1) insertion/deletion at known position (just change pointers), extra memory for pointers. Use arrays when: you need fast access by index, size is known. Use linked lists when: frequent insertions/deletions, size is unknown.",
    keyPoints: ["Array: Contiguous, O(1) access, O(n) insert/delete", "Linked List: Non-contiguous, O(n) access, O(1) insert/delete", "Array is cache-friendly", "Linked List uses extra memory for pointers"],
  },
  {
    id: 49, category: "DSA",
    question: "What is a Stack and Queue? Where are they used?",
    answer: "Stack: LIFO (Last In First Out) — like a stack of plates. Operations: push (add to top), pop (remove from top), peek (view top). Uses: function call stack, undo operations, expression evaluation, backtracking. Queue: FIFO (First In First Out) — like a queue at a ticket counter. Operations: enqueue (add to rear), dequeue (remove from front). Uses: BFS, print queue, task scheduling, message queues. Variants: Deque (double-ended), Priority Queue (by priority), Circular Queue.",
    keyPoints: ["Stack: LIFO — push, pop, peek", "Queue: FIFO — enqueue, dequeue", "Stack: Function calls, undo, backtracking", "Queue: BFS, scheduling, message passing"],
  },
  {
    id: 50, category: "DSA",
    question: "What is a Binary Search Tree (BST)?",
    answer: "A BST is a binary tree where: left child < parent < right child (for every node). This ordering makes search efficient — similar to binary search on a sorted array. Operations: Search/Insert/Delete are O(h) where h is height. For a balanced BST, h = log n (so operations are O(log n)). For a skewed BST (like a linked list), h = n (operations are O(n)). Inorder traversal of BST gives elements in sorted order. Self-balancing BSTs (AVL, Red-Black) maintain O(log n) height.",
    keyPoints: ["Left < Parent < Right for all nodes", "Search/Insert/Delete: O(log n) if balanced", "Inorder traversal gives sorted order", "Self-balancing: AVL tree, Red-Black tree"],
  },
  {
    id: 51, category: "DSA",
    question: "What is Hashing? How do Hash Maps work?",
    answer: "Hashing is a technique to map data to a fixed-size value (hash) using a hash function. A HashMap stores key-value pairs. The key is passed through a hash function to determine the index (bucket) where the value is stored. Average case: O(1) for insert, search, delete. Collision (two keys map to same index) is handled by: 1) Chaining — store multiple elements in a linked list at same index. 2) Open Addressing — find the next empty slot (linear probing, quadratic probing, double hashing).",
    keyPoints: ["Hash function maps key → index", "Average O(1) for insert, search, delete", "Collisions handled by chaining or open addressing", "Load factor affects performance"],
  },
  {
    id: 52, category: "DSA",
    question: "What is BFS vs DFS? When to use which?",
    answer: "BFS (Breadth-First Search): Explores level by level. Uses a Queue. Finds shortest path in unweighted graphs. Space: O(V) for the queue. Good for: shortest path, level-order traversal, finding nearby nodes. DFS (Depth-First Search): Explores as deep as possible before backtracking. Uses a Stack (or recursion). Space: O(h) for recursion stack. Good for: cycle detection, topological sorting, connected components, maze solving, pathfinding in trees.",
    keyPoints: ["BFS: Level-by-level, uses Queue, shortest path", "DFS: Deep first, uses Stack/Recursion", "BFS: O(V) space, DFS: O(h) space", "BFS for shortest path, DFS for exhaustive search"],
  },
  {
    id: 53, category: "DSA",
    question: "What is Dynamic Programming (DP)?",
    answer: "DP is an optimization technique for problems with overlapping subproblems and optimal substructure. Instead of solving the same subproblem repeatedly, solve it once and store the result. Two approaches: 1) Top-Down (Memoization) — recursive + cache results. Start from the main problem, break down. 2) Bottom-Up (Tabulation) — iterative, solve smaller subproblems first, build up to the answer. Examples: Fibonacci, 0/1 Knapsack, Longest Common Subsequence, Coin Change.",
    keyPoints: ["Solves overlapping subproblems efficiently", "Store results to avoid recomputation", "Top-Down: Recursion + Memoization", "Bottom-Up: Iterative Tabulation"],
  },
  {
    id: 54, category: "DSA",
    question: "What is the difference between a Heap and a BST?",
    answer: "Heap: A complete binary tree where parent is greater (max-heap) or smaller (min-heap) than children. NOT a search tree — left/right ordering doesn't matter. Stored as an array. Operations: Insert O(log n), Extract-min/max O(log n), Find-min/max O(1). Used for: Priority queues, heap sort. BST: Left < Parent < Right. Used for searching, in-order sorted output. Operations: All O(log n) if balanced. Used for: Ordered data, range queries, sets/maps.",
    keyPoints: ["Heap: Parent > children (max) or parent < children (min)", "BST: Left < Parent < Right", "Heap: O(1) find min/max, BST: O(log n) search", "Heap = priority queue, BST = ordered search"],
  },
  {
    id: 55, category: "DSA",
    question: "What are Sorting Algorithms? Compare the major ones.",
    answer: "Bubble Sort: Compare adjacent, swap. O(n²). Simple but slow. Selection Sort: Find minimum, place at front. O(n²). Insertion Sort: Insert each element in sorted position. O(n²) but good for small/nearly sorted data. Merge Sort: Divide and merge. O(n log n). Stable. Extra space O(n). Quick Sort: Pick pivot, partition. Average O(n log n), worst O(n²). In-place. Fastest in practice. Heap Sort: Build heap, extract. O(n log n). In-place. Counting/Radix Sort: O(n+k), non-comparison, limited to integers.",
    keyPoints: ["O(n²): Bubble, Selection, Insertion", "O(n log n): Merge, Quick, Heap", "Merge Sort: Stable, O(n) extra space", "Quick Sort: Fastest in practice, in-place"],
  },
  {
    id: 56, category: "DSA",
    question: "What is a Graph? How is it represented?",
    answer: "A graph G = (V, E) consists of vertices (nodes) and edges (connections). Types: Directed (one-way edges) vs Undirected (two-way). Weighted vs Unweighted. Cyclic vs Acyclic. Representations: 1) Adjacency Matrix — 2D array where matrix[i][j] = 1 if edge exists. O(V²) space. O(1) edge lookup. Good for dense graphs. 2) Adjacency List — array of lists where list[i] contains neighbors of vertex i. O(V+E) space. Good for sparse graphs (most real-world graphs).",
    keyPoints: ["G = (V, E) — vertices and edges", "Directed vs Undirected, Weighted vs Unweighted", "Adjacency Matrix: O(V²) space, O(1) lookup", "Adjacency List: O(V+E) space, better for sparse graphs"],
  },
  {
    id: 57, category: "DSA",
    question: "What is the difference between Greedy and Dynamic Programming?",
    answer: "Greedy: Makes the locally optimal choice at each step, hoping it leads to a global optimum. No backtracking. Faster but doesn't always give optimal solution. Works when the problem has the greedy choice property. Examples: Activity Selection, Huffman Coding, Dijkstra's. DP: Considers all possibilities by solving overlapping subproblems. Always gives optimal solution when applicable. Slower but guaranteed correct. Works when problem has overlapping subproblems + optimal substructure. Examples: Knapsack, LCS, Matrix Chain.",
    keyPoints: ["Greedy: Local best choice, no backtracking, fast", "DP: Considers all subproblems, always optimal, slower", "Greedy works when greedy choice property holds", "DP works for overlapping subproblems + optimal substructure"],
  },
  {
    id: 58, category: "DSA",
    question: "What is a Trie (Prefix Tree)?",
    answer: "A Trie is a tree-like data structure for efficiently storing and searching strings. Each node represents a character. The path from root to a node represents a prefix. Key operations: Insert, Search, StartsWith — all O(m) where m is string length. Space: O(ALPHABET_SIZE * m * n) for n strings. Uses: Autocomplete, spell checker, IP routing, dictionary, word games. Advantage over HashMap: Prefix-based searching, alphabetical ordering, no hash collisions.",
    keyPoints: ["Tree structure for efficient string operations", "Each node = one character, path = prefix", "Insert/Search/StartsWith: O(m), m = string length", "Uses: Autocomplete, spell check, dictionary"],
  },
];
