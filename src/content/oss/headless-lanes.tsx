import type { OssContent } from './types'

function Diagram() {
  return (
    <svg
      viewBox="0 0 660 300"
      className="w-full rounded-[var(--radius-md)] border border-white/10 bg-white/[0.02]"
      role="img"
      aria-label="headless-lanes architecture: a systemd timer starts the runner, lane-run.sh, which takes one lock per seat, unsets the API key and runs claude -p on the lane's markdown prompt. The runner writes a row to the run log for every run. The lane's files go to the inbox, and anything that needs a human goes to the queue as a decision. When the human approves, dispatch-check lists the decision and the dispatcher lane works it through the same runner."
    >
      <defs>
        <marker id="arrow-hl" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#D4FF4F" />
        </marker>
        <marker id="arrow-hl-muted" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#F5F4F0" fillOpacity="0.5" />
        </marker>
      </defs>
      <g fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" fill="#F5F4F0">
        <rect x="20" y="40" width="112" height="50" rx="8" fill="none" stroke="#F5F4F0" strokeOpacity="0.35" />
        <text x="76" y="62" textAnchor="middle">systemd timer</text>
        <text x="76" y="78" textAnchor="middle" fillOpacity="0.6">one per lane</text>

        <rect x="162" y="40" width="150" height="50" rx="8" fill="none" stroke="#D4FF4F" strokeOpacity="0.6" />
        <text x="237" y="62" textAnchor="middle">lane-run.sh</text>
        <text x="237" y="78" textAnchor="middle" fillOpacity="0.6">seat lock · key unset</text>

        <rect x="342" y="40" width="140" height="50" rx="8" fill="none" stroke="#F5F4F0" strokeOpacity="0.35" />
        <text x="412" y="62" textAnchor="middle">claude -p</text>
        <text x="412" y="78" textAnchor="middle" fillOpacity="0.6">lanes/&lt;lane&gt;.md</text>

        <rect x="520" y="20" width="120" height="44" rx="8" fill="none" stroke="#F5F4F0" strokeOpacity="0.35" />
        <text x="580" y="39" textAnchor="middle">inbox</text>
        <text x="580" y="54" textAnchor="middle" fillOpacity="0.6">act · read · fyi</text>

        <rect x="520" y="84" width="120" height="44" rx="8" fill="none" stroke="#F5F4F0" strokeOpacity="0.35" />
        <text x="580" y="103" textAnchor="middle">queue</text>
        <text x="580" y="118" textAnchor="middle" fillOpacity="0.6">decisions: todo</text>

        <rect x="162" y="132" width="150" height="44" rx="8" fill="none" stroke="#F5F4F0" strokeOpacity="0.35" />
        <text x="237" y="151" textAnchor="middle">run log</text>
        <text x="237" y="166" textAnchor="middle" fillOpacity="0.6">ok · error · locked</text>

        <rect x="520" y="168" width="120" height="44" rx="8" fill="none" stroke="#D4FF4F" strokeOpacity="0.6" />
        <text x="580" y="187" textAnchor="middle">human</text>
        <text x="580" y="202" textAnchor="middle" fillOpacity="0.6">Approve</text>

        <rect x="342" y="236" width="140" height="44" rx="8" fill="none" stroke="#F5F4F0" strokeOpacity="0.35" />
        <text x="412" y="255" textAnchor="middle">dispatch-check</text>
        <text x="412" y="270" textAnchor="middle" fillOpacity="0.6">ExecCondition=</text>

        <rect x="162" y="236" width="150" height="44" rx="8" fill="none" stroke="#F5F4F0" strokeOpacity="0.35" />
        <text x="237" y="255" textAnchor="middle">dispatcher lane</text>
        <text x="237" y="270" textAnchor="middle" fillOpacity="0.6">works in_progress</text>

        <line x1="132" y1="65" x2="162" y2="65" stroke="#D4FF4F" strokeOpacity="0.6" markerEnd="url(#arrow-hl)" />
        <line x1="312" y1="65" x2="342" y2="65" stroke="#D4FF4F" strokeOpacity="0.6" markerEnd="url(#arrow-hl)" />
        <line x1="482" y1="56" x2="520" y2="44" stroke="#F5F4F0" strokeOpacity="0.5" markerEnd="url(#arrow-hl-muted)" />
        <line x1="482" y1="74" x2="520" y2="102" stroke="#F5F4F0" strokeOpacity="0.5" markerEnd="url(#arrow-hl-muted)" />
        <line x1="237" y1="90" x2="237" y2="132" stroke="#F5F4F0" strokeOpacity="0.5" markerEnd="url(#arrow-hl-muted)" />
        <line x1="580" y1="128" x2="580" y2="168" stroke="#D4FF4F" strokeOpacity="0.6" markerEnd="url(#arrow-hl)" />
        <line x1="540" y1="212" x2="482" y2="250" stroke="#D4FF4F" strokeOpacity="0.6" markerEnd="url(#arrow-hl)" />
        <line x1="342" y1="258" x2="312" y2="258" stroke="#D4FF4F" strokeOpacity="0.6" markerEnd="url(#arrow-hl)" />
        <polyline points="162,258 146,258 146,80 162,80" fill="none" stroke="#F5F4F0" strokeOpacity="0.5" markerEnd="url(#arrow-hl-muted)" />

        <text x="328" y="149" fillOpacity="0.55">every run is a row;</text>
        <text x="328" y="164" fillOpacity="0.55">a failed one goes to the inbox</text>
      </g>
    </svg>
  )
}

export const headlessLanes: OssContent = {
  slug: 'headless-lanes',
  problem: (
    <>
      <p>
        I run a one-person software business with more lanes of work than one person can staff:
        product, content, outreach research, reporting. Agents can take most of it, but only if
        they can run when I am not there, and only under one hard rule: nothing leaves the
        building without my tap.
      </p>
      <p className="mt-3">
        Prompting an agent is common. Leaving one alone at 6 a.m. and trusting what you find at 9
        is rare.{' '}
        <span className="font-mono text-[color:var(--color-accent)]">headless-lanes</span> is the
        scaffolding that makes the second thing routine: a runner, a run log, one inbox for
        everything the agents make, a queue of decisions that wait for a human, and the
        guardrails that came out of things breaking.
      </p>
      <p className="mt-3">
        It is small on purpose: Bash, Python&rsquo;s standard library, SQLite and systemd timers.{' '}
        <code>python3 console/console.py --demo</code> serves the whole thing with made-up data
        about thirty seconds after cloning.
      </p>
    </>
  ),
  architecture: {
    diagram: <Diagram />,
    walkthrough: (
      <>
        <p>
          <strong>Seats and lanes.</strong> A seat is one Claude Code login with its own config
          directory, its own connectors and its own mailbox. A lane is a markdown prompt plus a
          systemd timer. The prompt says who it is and that nobody is watching, the job, the hard
          limits, and the one thing it finishes with.
        </p>
        <p className="mt-3">
          <strong>The runner.</strong> <code>bin/lane-run.sh &lt;seat&gt; &lt;lane&gt;</code> takes
          a lock so a seat runs one lane at a time, unsets the API key so the run bills the
          seat&rsquo;s subscription, runs the prompt with <code>claude -p</code>, and writes one
          row to the run log whether or not the run ended ok. That includes the run that never
          started because the seat was busy, the prompt was missing or the seat was logged out. A
          run that did not end ok is also put in the inbox.
        </p>
        <p className="mt-3">
          <strong>Inbox and queue.</strong> Everything an agent makes for a human is registered in
          the step that makes it, and the inbox sorts by what the human has to do. An agent files
          a decision only when it needs a human, with what approval means spelled out in the body.
          Approve moves the decision to <code>in_progress</code>, and a dispatcher lane works
          those and nothing else. Its unit runs <code>lanes dispatch-check</code> as{' '}
          <code>ExecCondition=</code>, so with nothing approved the timer fires, wakes no seat and
          writes no row.
        </p>
        <p className="mt-3">
          <strong>The nightly lint</strong> runs with no agent involved: lanes past their cadence,
          runs that failed and never recovered, headless minutes per seat against a soft weekly
          budget, inbox rows whose file is gone, and files nothing registered.
        </p>
      </>
    ),
  },
  additionalSections: [
    {
      heading: 'The console',
      body: (
        <>
          <p>
            One Python file, standard library only, four pages. Today shows what needs a human
            now. Lanes shows every lane&rsquo;s last run with a Run now button that goes through
            the same runner and the same seat lock. Inbox renders what the lanes made in place.
            Queue is where a decision gets approved, declined or sent back with a comment.
          </p>
          <img
            src="/work/headless-lanes/today.png"
            alt="The Today page of the headless-lanes console with demo data: three decisions waiting, two inbox items that need a human, one failed run, one lane past its cadence, one approved decision waiting on the dispatcher."
            className="mt-4 w-full rounded-[var(--radius-md)] border border-white/10"
            loading="lazy"
          />
          <img
            src="/work/headless-lanes/queue.png"
            alt="The Queue page with demo data: each decision shows what approval means, its files in the inbox, the comments so far, and Approve, Decline and Comment buttons."
            className="mt-4 w-full rounded-[var(--radius-md)] border border-white/10"
            loading="lazy"
          />
          <p className="mt-3">
            Every name and number in those screenshots is invented. It binds to 127.0.0.1 and has
            no login.
          </p>
        </>
      ),
    },
    {
      heading: 'Autonomy tiers',
      body: (
        <>
          <p>
            <strong>Just do it, then report:</strong> research, drafts, database writes, code on a
            branch. Reversible, and none of it leaves the machine.{' '}
            <strong>One tap from the human:</strong> anything that leaves the building. A send is a
            draft sitting in the right mailbox, a merge is an open PR, a purchase is a decision
            with the price in it. <strong>Human only:</strong> calls, filings, anything that speaks
            for the person in a way that can&rsquo;t be taken back.
          </p>
          <p className="mt-3">
            A rule in a prompt is a request, so the shape of the work has to enforce it. Every
            lane prompt names its hard limits. A seat only gets the connectors its lanes need, so
            a drafting lane can create drafts and nothing more. Each lane ends before the tap, in
            a draft, a PR or a decision. A standing exception is written down with its cap and its
            date. And the kill switch is a file: <code>touch STOP</code> beside the database and
            the runner skips every lane before it takes a seat.
          </p>
        </>
      ),
    },
    {
      heading: 'What broke',
      body: (
        <>
          <p>Every guardrail in the repo came from something breaking in the system it was cut from.</p>
          <p className="mt-3">
            <strong>A cloud-drive mount zeroed a file, twice in one day.</strong> In-place rewrites
            on a FUSE mount left a long document at zero bytes. Now anything on the mount is
            edited as a scratch copy and copied over once, and the database refuses to open on a
            network mount at all.
          </p>
          <p className="mt-3">
            <strong>Hooks crashed on a second machine and seeded an empty database.</strong> Now
            one machine holds the database and the timers, every other machine is a thin client,
            and the session-start hook never creates a database.
          </p>
          <p className="mt-3">
            <strong>An API key left in a shell rc file changed the billing.</strong> With it set,
            Claude Code bills per token instead of using the seat&rsquo;s subscription. The runner
            now unsets the key for every lane, and a test checks that it does.
          </p>
          <p className="mt-3">
            <strong>The hosted tracker&rsquo;s free plan stops creating issues past a cap.</strong>{' '}
            A queue that stops accepting decisions is a bad way for this to fail. So closed
            issues archive after a month, the count is on the dashboard, and no decision gets
            filed unless a human must decide. In the repo the queue is a local table.
          </p>
          <p className="mt-3">
            <strong>Agents left files nobody tracked.</strong> Now everything made for a human is
            registered in the step that makes it, and the nightly lint finds what that rule
            missed.
          </p>
        </>
      ),
    },
    {
      heading: 'What cutting it down found',
      body: (
        <>
          <p>
            Cutting the system down for strangers to read turned up three faults in the one I
            run. All three are fixed in both places.
          </p>
          <p className="mt-3">
            <strong>A timer that never fired at night.</strong> I wrote{' '}
            <code>OnCalendar=*-*-* 07:30,19:00</code> and meant twice a day. systemd reads that as
            hour 7, minutes 19 and 30. The dispatcher ran at 7:19 and 7:30 every morning and
            skipped ten evenings in a row. Nothing failed, so nothing alerted.{' '}
            <code>systemd-analyze calendar</code> reads a timer line back to you, and the fix is
            one <code>OnCalendar=</code> line per time.
          </p>
          <p className="mt-3">
            <strong>The seat lock was inherited.</strong> The lock is a file descriptor, and the
            agent&rsquo;s child processes got a copy. Anything an agent left running would have
            kept its seat busy after the run ended. The runner now closes the descriptor for the
            child, and a test starts a run that leaves a process behind to prove the next run
            still gets the seat.
          </p>
          <p className="mt-3">
            <strong>The unit timeout was shorter than a run could be.</strong> A run can wait
            thirty minutes for its seat and then work for fifty-five. The units allowed an hour,
            so systemd could kill the runner mid-run, and a killed runner writes no row. They
            allow ninety-five minutes now.
          </p>
        </>
      ),
    },
    {
      heading: 'In use',
      body: (
        <p>
          On 2026-11-11, four weeks after run logging went in, my own lanes (client work left out)
          had logged 90 runs across 15 lanes, 89 of them ok. Everything made for me in that
          system, by a lane or by a live session, is a row in one inbox: 468 so far. The repo
          itself ships 51 tests, including the runner against a stand-in for the{' '}
          <code>claude</code> binary.
        </p>
      ),
    },
    {
      heading: 'Steal this',
      body: (
        <>
          <p>Each of these is a few lines and works without the rest.</p>
          <p className="mt-3">
            <strong>Unset the API key in the runner.</strong>{' '}
            <code>env -u ANTHROPIC_API_KEY claude -p ...</code>
          </p>
          <p className="mt-3">
            <strong>One lock per seat</strong>, with <code>flock</code>, closed for the child. Log
            the run that gave up waiting.
          </p>
          <p className="mt-3">
            <strong>A row for every run</strong>, written by the runner, never by the agent.
          </p>
          <p className="mt-3">
            <strong>
              <code>ExecCondition=</code> on the dispatcher.
            </strong>{' '}
            No approved work means no seat woken. Make a broken setup exit 255, so it fails the
            unit and can&rsquo;t pass for an empty queue.
          </p>
          <p className="mt-3">
            <strong>&ldquo;What approval means&rdquo;</strong> in the body of every decision. If
            the agent can&rsquo;t write that paragraph, the decision isn&rsquo;t ready to file.
          </p>
          <p className="mt-3">
            <strong>Ask the machine what it heard.</strong> Run every timer line through{' '}
            <code>systemd-analyze calendar</code> before you trust it.
          </p>
        </>
      ),
    },
  ],
  threatModel: (
    <>
      <p>
        <strong>Constraints this enforces:</strong> a seat runs one lane at a time. A lane never
        bills an API key. Every run leaves a row, including one that could not start. A decision
        is worked only after a human approves it, and never twice on the same answer. The
        database refuses a network mount. The console answers only requests addressed to
        loopback, refuses cross-site posts, and serves agent-written HTML in a sandbox.
      </p>
      <p className="mt-3">
        <strong>What it does not do:</strong> sandbox the agent. The runner passes{' '}
        <code>--dangerously-skip-permissions</code> by default, because nobody is there to answer
        a prompt, so the real boundary is the seat&rsquo;s own permissions, the lane&rsquo;s hard
        limits and the user the timer runs as. The console has no login. The Linear mirror is
        thin and is tested against a fake transport only. It needs Linux with systemd; only the
        demo runs anywhere Python does.
      </p>
    </>
  ),
  extractionNote: (
    <p>
      Cut down from the system I run my own business on. The runner, the run log, the inbox
      rules, the lint and the dispatcher pattern are the real ones, generalized. The example
      prompts are generic templates and the demo data is invented; my real lanes and anything
      about client work stay private. The console is a 700-line rewrite in the look of my own,
      which is too tangled up with private data to publish.
    </p>
  ),
}
